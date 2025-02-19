"use client";

import { cn } from "@/libs/shadcn/utils";
import { useSelectAiModelsStore } from "@/store/state";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const AiModelsHeader = () => {
  const { aiModels, selectAiModel } = useSelectAiModelsStore();

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });

  if (!isDesktop) {
    return (
      <ul
        className="fixed left-0 top-0 flex w-full gap-2 rounded-lg p-2
backdrop-blur-md"
      >
        {aiModels.map(({ id, imgSrc, selected }) => {
          return (
            <li
              key={id}
              className={cn(
                "flex flex-col items-center justify-center p-2",
                selected && "rounded-lg bg-neutral-200"
              )}
            >
              <button onClick={() => selectAiModel(id)}>
                <Image
                  src={imgSrc}
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
};
