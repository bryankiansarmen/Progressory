"use client";

import { useState, useMemo } from "react";
import { Exercise } from "@/types";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExercisePickerProps {
    allExercises: Exercise[];
    onSelect: (exercise: Exercise) => void;
    excludeIds?: string[];
}

export default function ExercisePicker({ allExercises, onSelect, excludeIds = [] }: ExercisePickerProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [muscleGroupFilter, setMuscleGroupFilter] = useState("all");

    const categories = ["all", "Strength", "Cardio", "Flexibility", "Stretching"];
    const muscleGroups = [
        "all",
        "Chest",
        "Legs",
        "Back",
        "Arms",
        "Shoulders",
        "Core",
        "FullBody",
    ];

    const filteredExercises = useMemo(() => {
        return allExercises
            .filter((ex) => !excludeIds.includes(ex.id))
            .filter((ex) => {
                const matchesSearch = ex.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = categoryFilter === "all" || ex.category === categoryFilter;
                const matchesMuscleGroup = muscleGroupFilter === "all" || ex.muscleGroup === muscleGroupFilter;
                return matchesSearch && matchesCategory && matchesMuscleGroup;
            });
    }, [allExercises, searchQuery, categoryFilter, muscleGroupFilter, excludeIds]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search exercises..."
                        className="pl-9 h-10 rounded-xl bg-card border-none shadow-inner"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        className="h-10 rounded-xl border border-input bg-card px-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        value={muscleGroupFilter}
                        onChange={(e) => setMuscleGroupFilter(e.target.value)}
                    >
                        {muscleGroups.map(g => <option key={g} value={g}>{g === 'all' ? 'All Muscles' : g}</option>)}
                    </select>
                </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                {filteredExercises.length > 0 ? (
                    filteredExercises.map((exercise) => (
                        <div
                            key={exercise.id}
                            onClick={() => onSelect(exercise)}
                            className="flex items-center justify-between p-3 rounded-xl border-2 border-transparent hover:border-primary/30 hover:bg-primary/5 cursor-pointer transition-all group"
                        >
                            <div className="flex flex-col">
                                <span className="font-semibold group-hover:text-primary transition-colors">{exercise.name}</span>
                                <div className="flex gap-2 mt-1">
                                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 border-primary/20 bg-primary/5">
                                        {exercise.muscleGroup}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{exercise.category}</span>
                                </div>
                            </div>
                            <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                                <Plus className="w-4 h-4" />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 text-muted-foreground italic">
                        No Exercises Found
                    </div>
                )}
            </div>
        </div>
    );
}
