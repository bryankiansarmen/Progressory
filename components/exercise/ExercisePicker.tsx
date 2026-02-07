"use client";

import { useState, useMemo } from "react";
import { Exercise } from "@/types";
import { Input } from "@/components/ui/input";
import { Search, Plus, ChevronDown, ChevronRight, Info, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExercisePickerProps {
    allExercises: Exercise[];
    onSelect: (exercise: Exercise) => void;
    onSelectMultiple?: (exercises: Exercise[]) => void;
    excludeIds?: string[];
    multiSelect?: boolean;
}

export default function ExercisePicker({
    allExercises,
    onSelect,
    onSelectMultiple,
    excludeIds = [],
    multiSelect = false
}: ExercisePickerProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [muscleGroupFilter, setMuscleGroupFilter] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);

    const handleSelect = (exercise: Exercise) => {
        if (multiSelect) {
            const isSelected = selectedExercises.some(ex => ex.id === exercise.id);
            if (isSelected) {
                setSelectedExercises(selectedExercises.filter(ex => ex.id !== exercise.id));
            } else {
                setSelectedExercises([...selectedExercises, exercise]);
            }
        } else {
            onSelect(exercise);
        }
    };

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

    const toggleExpand = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedId(prev => prev === id ? null : id);
    };

    const filteredMovements = useMemo(() => {
        return allExercises
            .filter((ex) => !excludeIds.includes(ex.id))
            .filter((ex) => {
                const matchesSearch =
                    ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    ex.variations?.some(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));

                const matchesMuscleGroup = muscleGroupFilter === "all" || ex.muscleGroup === muscleGroupFilter;

                return matchesSearch && matchesMuscleGroup;
            });
    }, [allExercises, searchQuery, muscleGroupFilter, excludeIds]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search movements (e.g. Press)..."
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
                {filteredMovements.length > 0 ? (
                    filteredMovements.map((movement) => {
                        const hasVariations = (movement.variations?.length || 0) > 0;
                        const isExpanded = expandedId === movement.id || searchQuery.length > 0;
                        const isSelected = selectedExercises.some(ex => ex.id === movement.id);

                        return (
                            <div key={movement.id} className="space-y-1">
                                {/* Movement Header */}
                                <div
                                    onClick={() => hasVariations ? setExpandedId(movement.id) : handleSelect(movement)}
                                    className={cn(
                                        "flex items-center justify-between p-3 rounded-xl border-2 transition-all group cursor-pointer",
                                        isExpanded && hasVariations ? "border-primary/20 bg-primary/5 shadow-sm" :
                                            isSelected ? "border-primary bg-primary/5 shadow-sm" : "border-transparent hover:bg-muted"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        {hasVariations && (
                                            <div
                                                onClick={(e) => toggleExpand(movement.id, e)}
                                                className="p-1 hover:bg-primary/10 rounded-md transition-colors"
                                            >
                                                {isExpanded ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className={cn(
                                                "font-bold tracking-tight transition-colors",
                                                isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
                                            )}>
                                                {movement.name}
                                            </span>
                                            <div className="flex gap-2 mt-0.5">
                                                <Badge variant="outline" className="text-[9px] px-1 h-3.5 border-primary/20 bg-primary/5 uppercase font-black tracking-tighter">
                                                    {movement.muscleGroup}
                                                </Badge>
                                                {hasVariations && (
                                                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center gap-1">
                                                        <Info className="w-3 h-3" /> {movement.variations?.length} Options
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {!hasVariations && (
                                        <div className={cn(
                                            "p-2 rounded-full transition-all shadow-sm",
                                            isSelected ? "bg-primary text-white" : "bg-primary/10 group-hover:bg-primary group-hover:text-white"
                                        )}>
                                            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    )}
                                </div>

                                {hasVariations && isExpanded && (
                                    <div className="ml-8 space-y-1 animate-in slide-in-from-top-2 duration-300">
                                        {movement.variations?.map((variation) => {
                                            const isVarSelected = selectedExercises.some(ex => ex.id === variation.id);
                                            return (
                                                <div
                                                    key={variation.id}
                                                    onClick={() => handleSelect(variation)}
                                                    className={cn(
                                                        "flex items-center justify-between p-2 pl-4 rounded-xl border transition-all group/var cursor-pointer",
                                                        isVarSelected ? "border-primary bg-primary/5" : "border-transparent hover:border-primary/20 hover:bg-primary/5"
                                                    )}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className={cn(
                                                            "text-sm font-semibold transition-colors",
                                                            isVarSelected ? "text-primary" : "text-muted-foreground group-hover/var:text-primary"
                                                        )}>
                                                            {variation.name}
                                                        </span>
                                                        <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">
                                                            {variation.equipment || "Standard"}
                                                        </span>
                                                    </div>
                                                    <div className={cn(
                                                        "p-1.5 rounded-full transition-all",
                                                        isVarSelected ? "bg-primary text-white" : "bg-primary/5 group-hover/var:bg-primary group-hover/var:text-white"
                                                    )}>
                                                        {isVarSelected ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-12 bg-muted/20 rounded-3xl border-2 border-dashed border-muted text-muted-foreground font-medium italic">
                        No Movements Found
                    </div>
                )}
            </div>

            {multiSelect && selectedExercises.length > 0 && (
                <div className="pt-4 border-t sticky bottom-0 bg-card z-10 animate-in slide-in-from-bottom-2 duration-300">
                    <Button
                        className="w-full h-11 rounded-xl font-bold shadow-lg shadow-primary/20 gap-2"
                        onClick={() => onSelectMultiple?.(selectedExercises)}
                    >
                        <Check className="w-4 h-4" />
                        Add Selected ({selectedExercises.length})
                    </Button>
                </div>
            )}
        </div>
    );
}
