import useSWR from "swr";
import { getActivities } from "../services/activities";
import useSWRMutation from "swr/mutation";

export function useActivities() {
  return useSWR("/data.json", getActivities);
}

export function useActivitiesOnDemand() {
  return useSWRMutation('/data.json', getActivities, {
    revalidate: false,
    throwOnError: false
  });
}
