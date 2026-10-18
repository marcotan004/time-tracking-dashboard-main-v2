import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import type { Timeframe } from "./types";
import "./App.sass";
import { useActivitiesOnDemand } from "./hooks/useActivities";

function App() {
  const [mode, setMode] = useState<Timeframe>("daily");
  const { data: activities, error, isMutating, trigger } = useActivitiesOnDemand();

  return (
    <main>
      <div className="dashboard-profile">
        <ProfileCard
          name="Jeremy Robson"
          profileImage="/images/image-jeremy.png"
          mode={mode}
          onModeChange={setMode}
        />
      </div>
      <section className="activity-card-grid">
        <button
          type="button"
          onClick={() => trigger()}
          disabled={isMutating}
        >
          Load Activities
        </button>
        {!activities && !error && !isMutating && <p>Click to load activities.</p>}
        {isMutating && <p role="status">Loading activities...</p>}
        {!isMutating && error && <p role="alert">Could not load activities.</p>}
        {!isMutating &&
          !error &&
          (activities ?? []).map((activity) => (
            <ActivityCard
              key={activity.title}
              mode={mode}
              activity={activity}
            />
          ))}
      </section>
    </main>
  );
}

export default App;
