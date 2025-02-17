"use client";

import { ChatGPT } from "@/server/chat-gpt";
import { useUserInputStore } from "@/store/state";

import { useEffect } from "react";

export const AiModelsInteraction = () => {
  const { userInput } = useUserInputStore();

  useEffect(() => {
    (async () => {
      const response = await ChatGPT(
        userInput[userInput.length - 1].userInput
      );

      console.log(response);
    })();
  }, [userInput]);

  return <div></div>;
};
