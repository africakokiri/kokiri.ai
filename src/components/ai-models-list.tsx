"use client";

import { useAiModelsStore } from "@/store/state";

import Image from "next/image";

export const AiModelsList = () => {
  const { aiModels } = useAiModelsStore();

  return (
    <header className="fixed">
      <ul className="flex flex-col items-center gap-4 p-2">
        {aiModels.map(({ id, name, imageSrc }) => {
          return (
            <li key={id}>
              <button
                className="flex flex-col items-center justify-center gap-1"
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
