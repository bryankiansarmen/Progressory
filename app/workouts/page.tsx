import { getWorkouts } from "@/services/workout.service";
import WorkoutCard from "@/components/workout/WorkoutCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function WorkoutsPage() {
    // For now mocking userId as we don't have auth yet
    const workouts = await getWorkouts("user_123");

    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto py-8 px-4">
                <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2 text-primary">Templates</h1>
                        <p className="text-muted-foreground text-lg">
                            Manage your workout routines and plans.
                        </p>
                    </div>
                    <Link href="/workouts/new">
                        <Button className="gap-2 shadow-lg shadow-primary/20">
                            <Plus className="w-4 h-4" />
                            New Template
                        </Button>
                    </Link>
                </header>

                {workouts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workouts.map((workout) => (
                            <WorkoutCard key={workout.id} workout={workout} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed rounded-3xl bg-card/30">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <Plus className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">No templates yet</h3>
                        <p className="text-muted-foreground text-center max-w-sm mb-8">
                            Create your first workout template to start tracking your progress effectively.
                        </p>
                        <Link href="/workouts/new">
                            <Button size="lg" className="rounded-full px-8">
                                Create Routine
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
}
