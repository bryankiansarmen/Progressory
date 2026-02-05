import { getWorkoutById } from "@/services/workout.service";
import WorkoutPlayerContainer from "@/components/workout/player/WorkoutPlayerContainer";
import { redirect } from "next/navigation";

interface ActiveWorkoutPageProps {
    searchParams: Promise<{ workoutId?: string }>;
}

export default async function ActiveWorkoutPage({ searchParams }: ActiveWorkoutPageProps) {
    const { workoutId } = await searchParams;

    if (!workoutId) {
        redirect("/workouts");
    }

    const template = await getWorkoutById(workoutId);

    if (!template) {
        redirect("/workouts");
    }

    return (
        <main className="min-h-screen bg-background">
            <WorkoutPlayerContainer template={template} />
        </main>
    );
}
