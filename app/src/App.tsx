import { useState } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import type { Activity, Timeframe } from "./types";
import "./App.sass";

function App() {
  const [mode, setMode] = useState<Timeframe>("daily");
  const activities: Activity[] = [];

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
        {activities.map((activity) => (
          <ActivityCard key={activity.title} mode={mode} activity={activity} />
        ))}
      </section>
    </main>
  );
}

export default App;
