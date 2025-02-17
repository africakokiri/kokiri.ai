"use client";

import { useUserInputStore } from "@/store/state";

import { useEffect } from "react";

export const AiModelsInteraction = () => {
  const { userInput } = useUserInputStore();

  useEffect(() => {}, [userInput]);

  return (
    <div>
      <div>
        {userInput.map((input) => {
          return (
            <div
              key={input.id}
              className="space-y-8"
            >
              <div className="flex w-full justify-end">
                <p className="mr-4 rounded-lg bg-neutral-200 px-2 py-1">
                  {input.userInput}
                </p>
              </div>
              <div className="flex w-full justify-start">
                <p className="ml-4 rounded-lg px-2 py-1">
                  {input.userInput}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
