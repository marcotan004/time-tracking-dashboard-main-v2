import { afterEach, describe, expect, it, vi } from "vitest";
import { getActivities } from "./activities";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("getActivities", () => {
  it("requests the dataset and returns validated activities", async () => {
    const data = [
      {
        title: "Play",
        timeframes: {
          daily: { current: 0, previous: 2 },
          weekly: { current: 12, previous: 18 },
          monthly: { current: 48, previous: 62 },
        },
      },
    ];
    const fetchMock = vi.fn().mockResolvedValue(Response.json(data));
    vi.stubGlobal("fetch", fetchMock);
    await expect(getActivities("/data.json")).resolves.toEqual(data);
    expect(fetchMock).toHaveBeenCalledExactlyOnceWith("/data.json");
  });

  it("rejects HTTP errors before parsing the body", async () => {
    const json = vi.fn();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404, json }),
    );
    await expect(getActivities("/data.json")).rejects.toThrow(
      "HTTP error! Status: 404",
    );
    expect(json).not.toHaveBeenCalled();
  });

  it("propagates network failures", async () => {
    const error = new TypeError("Network unavailable");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(error));
    await expect(getActivities("/data.json")).rejects.toBe(error);
  });

  it("rejects malformed JSON", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("not JSON")));
    await expect(getActivities("/data.json")).rejects.toBeInstanceOf(
      SyntaxError,
    );
  });

  it("rejects valid JSON with an invalid activity shape", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(Response.json([{ title: "Play", timeframes: {} }])),
    );
    await expect(getActivities("/data.json")).rejects.toThrow(
      "timeframes.daily",
    );
  });
});
