import "./App.sass";

import { useState } from "react";

import ActivityCard from "./components/ActivityCard/ActivityCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { useActivities } from "./hooks/useActivities";
import type { Timeframe } from "./types";

function App() {
  const [mode, setMode] = useState<Timeframe>("daily");
  const { data: activities, error, isLoading } = useActivities();

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
        {isLoading && <p role="status">Loading activities...</p>}
        {!isLoading && error && <p role="alert">Could not load activities.</p>}
        {!isLoading &&
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
