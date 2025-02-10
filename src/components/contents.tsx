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

    const selectedAiModel = aiModels.find(
      ({ isSelected }) => isSelected === true
    );

    if (selectedAiModel) {
      api.scrollTo(selectedAiModel?.id);
    }

    // eslint-disable-next-line
  }, [api, aiModels]);

  return (
    <Carousel
      className="h-full w-full bg-green-100 *:h-full"
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
              <div className="flex h-full items-center justify-center">
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
