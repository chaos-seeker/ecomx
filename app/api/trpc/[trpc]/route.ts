import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/root";
import { createTRPCContext } from "@/server/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
