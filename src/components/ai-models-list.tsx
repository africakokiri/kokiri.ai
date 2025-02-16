"use client";

import { cn } from "@/libs/shadcn/utils";
import { useAiModelsStore } from "@/store/state";

import Image from "next/image";

export const AiModelsList = () => {
  const { aiModels, selectedAiModel, setSelectedAiModel } =
    useAiModelsStore();

  return (
    <header className="fixed">
      <ul className="flex flex-col items-center gap-2 bg-green-100 p-2">
        {aiModels.map(({ id, name, imageSrc }) => {
          return (
            <li key={id}>
              <button
                className={cn(
                  `flex max-h-[58px] min-h-[58px] min-w-[58px] max-w-[58px]
flex-col items-center justify-center gap-1 rounded-lg`,
                  selectedAiModel.name === name && "bg-black/20"
                )}
                onClick={() => setSelectedAiModel(aiModels[id])}
              >
                <Image
                  src={imageSrc}
                  alt=""
                  width={24}
                  height={24}
                />
                <span className="text-xs">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
