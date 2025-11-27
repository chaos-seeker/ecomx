import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  ping: publicProcedure.query(() => ({
    message: "pong",
    timestamp: Date.now(),
  })),
});

export type AppRouter = typeof appRouter;
