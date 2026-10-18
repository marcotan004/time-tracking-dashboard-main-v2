export const timeframes = ["daily", "weekly", "monthly"] as const;
export type Timeframe = (typeof timeframes)[number];
