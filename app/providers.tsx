"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type PropsWithChildren } from "react";
import { TooltipProvider } from "@/ui/tooltip";
import type { RouterClient } from "@orpc/server";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { AppRouter } from "@/server/router";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:3000";
};

const link = new RPCLink({
  url: `${getBaseUrl()}/api/rpc`,
});

export const orpc: RouterClient<AppRouter> = createORPCClient(link);

const QueryClientProviderWrapper = (props: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

const Tooltip = (props: PropsWithChildren) => (
  <TooltipProvider>{props.children}</TooltipProvider>
);

export default function Providers(props: PropsWithChildren) {
  return (
    <Tooltip>
      <QueryClientProviderWrapper>{props.children}</QueryClientProviderWrapper>
    </Tooltip>
  );
}
