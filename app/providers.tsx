"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";
import { useState, type PropsWithChildren } from "react";
import type { AppRouter } from "@/server/root";
import { TooltipProvider } from "@/ui/tooltip";

const trpc = createTRPCReact<AppRouter>();

const Trpc = (props: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => process.env.NODE_ENV === "development",
        }),
        httpBatchLink({
          url: "/api/trpc",
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </trpc.Provider>
    </QueryClientProvider>
  );
};

const Tooltip = (props: PropsWithChildren) => (
  <TooltipProvider>{props.children}</TooltipProvider>
);

export default function Providers(props: PropsWithChildren) {
  return (
    <Tooltip>
      <Trpc>{props.children}</Trpc>
    </Tooltip>
  );
}
