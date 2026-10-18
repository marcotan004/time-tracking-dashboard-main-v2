import useSWR from "swr";
import { getActivities } from "../services/activities";

export function useActivities() {
    return useSWR('/data.json', getActivities);
}