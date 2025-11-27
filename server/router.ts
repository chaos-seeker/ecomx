import { os } from "@orpc/server";
import { z } from "zod";

export const router = {
  ping: os
    .input(z.void())
    .output(
      z.object({
        message: z.string(),
        timestamp: z.number(),
      })
    )
    .handler(() => ({
      message: "pong",
      timestamp: Date.now(),
    })),
};

export type AppRouter = typeof router;

