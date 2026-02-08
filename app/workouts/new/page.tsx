import WorkoutBuilderContainer from "@/components/workout/WorkoutBuilderContainer";

export default async function NewWorkoutPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto py-8 px-4">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">New Template</h1>
                    <p className="text-muted-foreground text-lg">
                        Build your custom routine and save it for your next session.
                    </p>
                </header>

                <WorkoutBuilderContainer />
            </div>
        </main>
    );
}
