"use client";

import {
  useCompletedUserInputStore,
  useUserInputStore
} from "@/store/state";

import { ChevronUpIcon } from "lucide-react";
import { type FormEvent } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const UserInput = () => {
  const { userInput, setUserInput } = useUserInputStore();
  const { setCompletedUserInput } = useCompletedUserInputStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setCompletedUserInput(userInput);
    setUserInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-4 left-4 flex w-[calc(100dvw-32px)]
items-center rounded-lg border-[1px] border-black/20 pr-3 shadow-lg"
    >
      <TextareaAutosize
        minRows={2}
        maxRows={5}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="프롬프트를 입력하세요."
        className="w-full resize-none rounded-lg p-3 outline-none"
      />
      <button
        onClick={() => setCompletedUserInput(userInput)}
        className="max-h-fit max-w-fit rounded-lg bg-black p-2 text-white"
      >
        <ChevronUpIcon />
      </button>
    </form>
  );
};
