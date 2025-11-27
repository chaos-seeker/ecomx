"use client";

import type { PropsWithChildren } from "react";

import { TooltipProvider } from "@/ui/tooltip";

export const Providers = (props: PropsWithChildren) => {
  return <TooltipProvider>{props.children}</TooltipProvider>;
};
