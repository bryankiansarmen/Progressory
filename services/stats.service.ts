"use server";

import db from "@/lib/db";
import { subDays, startOfDay } from "date-fns";

export interface DashboardStats {
    weeklyVolume: number;
    weeklySessions: number;
    activityDays: boolean[];
    recentPRs: {
        exerciseName: string;
        weight: number;
        reps: number;
        date: string;
    }[];
}

export const getDashboardStats = async (userId: string): Promise<DashboardStats> => {
    const now = new Date();
    const sevenDaysAgo = subDays(startOfDay(now), 7);

    // 1. Fetch all logs for the last 7 days for volume and frequency
    const recentLogs = await db.workoutLog.findMany({
        where: {
            userId,
            date: {
                gte: sevenDaysAgo,
            },
        },
        include: {
            entries: {
                include: {
                    sets: true,
                },
            },
        },
    });

    // 2. Calculate Weekly Volume
    let totalVolume = 0;
    recentLogs.forEach(log => {
        log.entries.forEach(entry => {
            entry.sets.forEach(set => {
                totalVolume += set.weight * set.reps;
            });
        });
    });

    // 3. Activity Days (last 7 days)
    const activityDays = Array(7).fill(false);
    recentLogs.forEach(log => {
        const dayDiff = Math.floor((now.getTime() - log.date.getTime()) / (1000 * 60 * 60 * 24));
        if (dayDiff >= 0 && dayDiff < 7) {
            activityDays[6 - dayDiff] = true; // Map to [D-6, D-5, ..., Today]
        }
    });

    // 4. Fetch Recent PRs (Simulated - Top weight per exercise for this user)
    // Corrected relation name from 'log' to 'workoutLog'
    const allEntries = await db.workoutLogEntry.findMany({
        where: { workoutLog: { userId } },
        include: {
            exercise: true,
            sets: {
                orderBy: { weight: 'desc' },
                take: 1
            },
            workoutLog: true
        },
        orderBy: { createdAt: 'desc' },
        take: 30
    });

    // Filter to get unique exercises and their top weights
    const prMap = new Map();
    (allEntries as any[]).forEach(entry => {
        if (!prMap.has(entry.exerciseId) && entry.sets.length > 0) {
            prMap.set(entry.exerciseId, {
                exerciseName: entry.exercise.name,
                weight: entry.sets[0].weight,
                reps: entry.sets[0].reps,
                date: entry.workoutLog.date.toLocaleDateString(),
            });
        }
    });

    return {
        weeklyVolume: totalVolume,
        weeklySessions: recentLogs.length,
        activityDays,
        recentPRs: Array.from(prMap.values()).slice(0, 3),
    };
};
