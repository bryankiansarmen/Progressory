"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, ArrowRight, Share2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SessionCompleteModalProps {
    duration: number;
    exerciseCount: number;
    setCount: number;
}

export default function SessionCompleteModal({ duration, exerciseCount, setCount }: SessionCompleteModalProps) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-2xl animate-in fade-in duration-500">
            <div className="w-full max-w-lg bg-card border-2 rounded-[40px] shadow-2xl p-8 text-center animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/40">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                </div>

                <h1 className="text-4xl font-black tracking-tight mb-2">Workout Crushed!</h1>
                <p className="text-muted-foreground mb-8">Great job on finishing your session. Your consistency is paying off.</p>

                <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="p-4 bg-primary/5 rounded-3xl border border-primary/10">
                        <div className="text-2xl font-black text-primary">{duration}</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Mins</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-3xl border border-primary/10">
                        <div className="text-2xl font-black text-primary">{exerciseCount}</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Exercises</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-3xl border border-primary/10">
                        <div className="text-2xl font-black text-primary">{setCount}</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Sets</div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Link href="/workouts" className="w-full">
                        <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 gap-2">
                            Done
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </Link>
                    <Button variant="ghost" className="h-14 rounded-2xl font-bold gap-2 text-muted-foreground hover:text-primary">
                        <Share2 className="w-4 h-4" />
                        Share Progress
                    </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-amber-500">
                    <Trophy className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-widest">New Session Record!</span>
                </div>
            </div>
        </div>
    );
}
