import type { Activity } from "../types";
import { validateActivities } from "./activities.validation";

export async function getActivities(): Promise<Activity[]> {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const activities: unknown = await response.json();
  return validateActivities(activities);
}
