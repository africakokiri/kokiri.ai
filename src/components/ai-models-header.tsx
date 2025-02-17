"use client";

import { cn } from "@/libs/shadcn/utils";
import { useAiModelsStore } from "@/store/state";

import Image from "next/image";

export const AiModelsHeader = () => {
  const { aiModels, selectAiModel } = useAiModelsStore();

  return (
    <ul className="fixed left-0 top-0 flex gap-2 p-2">
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
};
