import { describe, expect, it } from "vitest";

import { timeframes } from "../types";
import { validateActivities } from "./activities.validation";

function createActivity() {
  return {
    title: "Play",
    timeframes: {
      daily: { current: 0, previous: 2 },
      weekly: { current: 12, previous: 18 },
      monthly: { current: 48, previous: 62 },
    },
  };
}

describe("validateActivities", () => {
  it("accepts multiple activities and zero hours without changing the input", () => {
    const data = [createActivity(), { ...createActivity(), title: "Work" }];
    const original = structuredClone(data);
    expect(validateActivities(data)).toEqual(original);
    expect(data).toEqual(original);
  });

  it("accepts an empty list", () => {
    expect(validateActivities([])).toEqual([]);
  });

  it.each([undefined, null, {}, "activities", 42])(
    "rejects non-array input: %j",
    (data) => {
      expect(() => validateActivities(data)).toThrow(
        "Expected an array of activities.",
      );
    },
  );

  it.each([null, [], "Play", 42])(
    "rejects invalid activities: %j",
    (activity) => {
      expect(() => validateActivities([activity])).toThrow(
        "Activity at index 0 must be a non-null object",
      );
    },
  );

  it.each([undefined, null, 42, {}])(
    "rejects missing or non-string titles: %j",
    (title) => {
      expect(() =>
        validateActivities([{ ...createActivity(), title }]),
      ).toThrow("must have a string title");
    },
  );

  it.each([undefined, null, [], "daily", 42])(
    "rejects invalid timeframes containers: %j",
    (entries) => {
      expect(() =>
        validateActivities([{ ...createActivity(), timeframes: entries }]),
      ).toThrow("Activity at index 0.timeframes must be a non-null object");
    },
  );

  describe.each(timeframes)("%s", (mode) => {
    it.each([undefined, null, [], "hours", 42])(
      "rejects missing or invalid entries: %j",
      (entry) => {
        const activity = createActivity();
        const entries: Record<string, unknown> = {
          ...activity.timeframes,
          [mode]: entry,
        };
        if (entry === undefined) delete entries[mode];
        expect(() =>
          validateActivities([{ ...activity, timeframes: entries }]),
        ).toThrow(`timeframes.${mode} must be a non-null object`);
      },
    );

    describe.each(["current", "previous"] as const)("%s hours", (field) => {
      it.each([undefined, null, "2", -1, NaN, Infinity, -Infinity])(
        "rejects invalid hours: %j",
        (value) => {
          const activity = createActivity();
          const entries = {
            ...activity.timeframes,
            [mode]: { ...activity.timeframes[mode], [field]: value },
          };
          expect(() =>
            validateActivities([
              createActivity(),
              { ...activity, timeframes: entries },
            ]),
          ).toThrow(
            `Activity at index 1.timeframes.${mode}.${field} must be a finite, nonnegative number.`,
          );
        },
      );
    });
  });
});
