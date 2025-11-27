"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { cn } from "@/utils/cn";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden transition-all shadow-none border-border duration-300 hover:-translate-y-1"
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={props.image}
          alt={"تصویر"}
          fill
          className="object-cover transition duration-500"
        />
      </div>
      <CardHeader className="border-y p-3">
        <CardTitle className="line-clamp-2 text-base">{props.title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between p-3">
        <span className="text-lg font-medium text-foreground">
          {props.price} $
        </span>
        <Button className="w-fit">
          <ShoppingCart className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
