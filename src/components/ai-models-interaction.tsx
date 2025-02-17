"use client";

import { ChatGPT } from "@/server/chat-gpt";
import { useAiModelsStore, useUserInputStore } from "@/store/state";

import { useEffect, useState } from "react";

export const AiModelsInteraction = () => {
  const { userInput } = useUserInputStore();
  const { aiModels } = useAiModelsStore();
  const [gptResponse, setGptResponse] = useState<(string | null)[]>([]);

  useEffect(() => {
    (async () => {
      if (userInput.length === 0) {
        return null;
      }

      const response = await ChatGPT(
        userInput[userInput.length - 1].userInput
      );

      setGptResponse([...gptResponse, response]);
    })();
  }, [userInput]);

  return (
    <div>
      <div className="space-y-4">
        {userInput.map((input, index) => {
          return (
            <div
              key={input.id}
              // user input <-> response
              className="space-y-4"
            >
              <div className="flex w-full justify-end">
                <p className="mx-4 rounded-lg bg-neutral-200 px-2 py-1">
                  {input.userInput}
                </p>
              </div>
              <div className="flex w-full justify-start">
                <p className="mx-4 rounded-lg px-2 py-1">
                  {gptResponse[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
