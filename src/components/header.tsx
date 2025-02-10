"use client";

import { cn } from "@/libs/shadcn/utils";
import { useAiModelsStore } from "@/store/zustand";

export const Header = () => {
  const { aiModels, setAiModel } = useAiModelsStore();

  // useEffect(() => {
  //   console.log(aiModels);
  // }, [aiModels]);

  return (
    <header className="w-full">
      <ul className="flex justify-between gap-4">
        {aiModels.map(({ id, name, isSelected }) => {
          return (
            <li
              key={id}
              className={cn(
                "border-b-2",
                isSelected ? "border-black" : "border-white"
              )}
            >
              <button
                onClick={() => {
                  setAiModel(id);
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
