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
  const [response, setResponse] = useState("");

  const fetchChat = async () => {
    setResponse(""); // 초기화
    const res = await fetch("/api/chat");
    const reader = res.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      setResponse((prev) => prev + decoder.decode(value));
    }
  };

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

  useEffect(() => {
    fetchChat();
  }, []);

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
                <span className="text-4xl font-semibold">{response}</span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
