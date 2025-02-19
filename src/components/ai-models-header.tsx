"use client";

import { cn } from "@/libs/shadcn/utils";
import {
  useConversationStore,
  useSelectAiModelsStore
} from "@/store/state";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const AiModelsHeader = () => {
  const { aiModels, selectAiModel } = useSelectAiModelsStore();
  const { conversations } = useConversationStore();

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });

  return (
    <ul
      className="fixed left-0 top-0 flex w-full gap-2 rounded-lg p-2
backdrop-blur-md md:h-full *:md:w-1/3"
    >
      {aiModels.map(({ id, name, imgSrc, selected }) => {
        return (
          <li
            key={id}
            className={cn(
              "flex flex-col items-center justify-center p-2 md:gap-2",
              !isDesktop && selected && "rounded-lg bg-neutral-200"
            )}
          >
            <button
              className={cn(isDesktop && "cursor-default")}
              onClick={() => selectAiModel(id)}
            >
              <Image
                src={imgSrc}
                alt=""
                width={isDesktop ? 72 : 24}
                height={isDesktop ? 72 : 24}
                className={cn(
                  "transition-opacity duration-1000",
                  isDesktop && conversations.length > 0
                    ? "opacity-15"
                    : "opacity-100"
                )}
              />
            </button>
            {isDesktop && (
              <p
                className={cn(
                  "transition-opacity duration-1000",
                  isDesktop && conversations.length > 0
                    ? "opacity-15"
                    : "opacity-100"
                )}
              >
                {name}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
