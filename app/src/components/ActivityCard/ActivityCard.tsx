import "./ActivityCard.sass";

import type { Activity, Timeframe } from "../../types";

type ActivityCardProps = {
  mode: Timeframe;
  activity: Activity;
};

const periodLabels: Record<Timeframe, string> = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function ActivityCard({ mode, activity }: ActivityCardProps) {
  const activityInfo = activity.timeframes[mode];
  const label = periodLabels[mode];
  const activityClass = activity.title.toLowerCase().replaceAll(" ", "-");

  return (
    <div className={`activity-card-container activity-card--${activityClass}`}>
      <article className="activity-card">
        <div className="activity-card-header">
          <h2>{activity.title}</h2>
          <button
            className="icon-button"
            type="button"
            aria-label={`More options for ${activity.title}`}
          >
            <svg
              width="21"
              height="5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="activity-card-summary">
          <p className="activity-card-summary-text">
            {`${activityInfo.current}hrs`}
          </p>
          <p className="activity-card-summary-subtext">
            {`${label} - ${activityInfo.previous}hrs`}
          </p>
        </div>
      </article>
    </div>
  );
}

export default ActivityCard;
