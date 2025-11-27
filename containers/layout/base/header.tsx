"use client";

import { Button } from "@/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import { LayoutDashboard } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between border p-3 my-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open dashboard"
                >
                  <LayoutDashboard className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" aria-label="View profile">
                  <User className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Profile</TooltipContent>
            </Tooltip>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open cart">
                <ShoppingBag className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Cart</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};
