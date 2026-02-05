"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, Loader2, Timer } from "lucide-react";
import Link from "next/link";

interface PlayerHeaderProps {
    templateName: string;
    timer: string;
    onFinish: () => void;
    isFinishing: boolean;
}

export default function PlayerHeader({ templateName, timer, onFinish, isFinishing }: PlayerHeaderProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b-2 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/workouts">
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="font-bold text-sm text-muted-foreground uppercase tracking-widest leading-none mb-1">Active Session</h2>
                        <h1 className="text-xl font-bold truncate max-w-[150px] sm:max-w-xs">{templateName}</h1>
                    </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-2xl border border-primary/20">
                        <Timer className="w-4 h-4 text-primary animate-pulse" />
                        <span className="font-mono text-xl font-black text-primary tabular-nums">{timer}</span>
                    </div>

                    <Button
                        onClick={onFinish}
                        disabled={isFinishing}
                        className="gap-2 shadow-lg shadow-success/20 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-6"
                    >
                        {isFinishing ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                        <span className="hidden sm:inline">Finish</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
