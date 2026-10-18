import type { Activity, Timeframe } from "../types";

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function validateHours(value: unknown, field: string): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new Error(`${field} must be a finite, nonnegative number.`);
  }
  return value;
}

export function validateActivities(data: unknown): Activity[] {
  if (!Array.isArray(data)) {
    throw new Error("Expected an array of activities.");
  }

  return data.map((activity: unknown, index): Activity => {
    const location = `Activity at index ${index}`;
    if (!isObject(activity)) {
      throw new Error(`${location} must be a non-null object, not an array.`);
    }
    if (typeof activity.title !== "string") {
      throw new Error(`${location} must have a string title.`);
    }
    if (!isObject(activity.timeframes)) {
      throw new Error(
        `${location}.timeframes must be a non-null object, not an array.`,
      );
    }

    const entries = activity.timeframes;
    function validateTimeframe(mode: Timeframe) {
      const entry = entries[mode];
      const field = `${location}.timeframes.${mode}`;
      if (!isObject(entry)) {
        throw new Error(`${field} must be a non-null object, not an array.`);
      }
      return {
        current: validateHours(entry.current, `${field}.current`),
        previous: validateHours(entry.previous, `${field}.previous`),
      };
    }

    return {
      title: activity.title,
      timeframes: {
        daily: validateTimeframe("daily"),
        weekly: validateTimeframe("weekly"),
        monthly: validateTimeframe("monthly"),
      },
    };
  });
}
