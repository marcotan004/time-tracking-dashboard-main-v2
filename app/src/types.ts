export const timeframes = ["daily", "weekly", "monthly"] as const;
export type Timeframe = (typeof timeframes)[number];

export type ActivityInfo = {
  current: number;
  previous: number;
};
export type Activity = {
  title: string;
  timeframes: Record<Timeframe, ActivityInfo>;
};
