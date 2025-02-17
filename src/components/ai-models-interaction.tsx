"use client";

import { useUserInputStore } from "@/store/state";

import { useEffect } from "react";

export const AiModelsInteraction = () => {
  const { userInput } = useUserInputStore();

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return <div></div>;
};
