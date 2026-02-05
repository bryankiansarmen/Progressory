"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardStatCardProps {
    title: string;
    value: string | number;
    unit?: string;
    icon: ReactNode;
    description?: string;
    trend?: {
        value: string;
        positive: boolean;
    };
    color?: "primary" | "emerald" | "amber" | "blue";
}

export default function DashboardStatCard({
    title,
    value,
    unit,
    icon,
    description,
    trend,
    color = "primary"
}: DashboardStatCardProps) {
    const colorStyles = {
        primary: "from-primary/20 to-primary/5 border-primary/20 text-primary",
        emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-600",
        amber: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-600",
        blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-600",
    };

    return (
        <Card className={cn(
            "p-6 border-2 bg-gradient-to-br transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden group relative",
            colorStyles[color]
        )}>
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {icon}
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-xs font-black uppercase tracking-widest opacity-60">
                    {title}
                </span>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight">{value}</span>
                    {unit && <span className="text-sm font-bold opacity-60 uppercase">{unit}</span>}
                </div>
                {description && (
                    <p className="text-xs font-medium opacity-50 mt-1">{description}</p>
                )}
                {trend && (
                    <div className={cn(
                        "text-[10px] font-black uppercase tracking-wider mt-2 px-2 py-0.5 rounded-full w-fit bg-white/40 border",
                        trend.positive ? "text-emerald-600 border-emerald-200" : "text-destructive border-destructive/20"
                    )}>
                        {trend.positive ? "▲" : "▼"} {trend.value} Effort
                    </div>
                )}
            </div>
        </Card>
    );
}
