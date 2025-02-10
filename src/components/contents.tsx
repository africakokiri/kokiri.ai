"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useAiModelsStore } from "@/store/zustand";

import { useEffect, useState } from "react";

export function Contents() {
  const { aiModels, setAiModel } = useAiModelsStore();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setAiModel(api.selectedScrollSnap());
    });
    // eslint-disable-next-line
  }, [api]);

  return (
    <Carousel
      className="h-full w-full *:h-full"
      opts={{
        loop: true
      }}
      setApi={setApi}
    >
      <CarouselContent className="h-full">
        {aiModels.map(({ id, name }, index) => {
          return (
            <CarouselItem
              key={id}
              className="h-full"
            >
              <div
                className="flex h-full items-center justify-center
bg-blue-100"
              >
                <span className="text-4xl font-semibold">
                  {index + 1}
                  {name}
                </span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
