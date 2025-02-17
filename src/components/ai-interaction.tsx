"use client";

import { useCompletedUserInputStore } from "@/store/state";

export const AiInteraction = () => {
  const { completedUserInput } = useCompletedUserInputStore();

  return (
    <div className="h-full w-full bg-blue-200">
      <h1>{completedUserInput}</h1>
    </div>
  );
};
