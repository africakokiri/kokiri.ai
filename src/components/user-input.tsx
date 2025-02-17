"use client";

import {
  useAiModelAndUserInteractionStore,
  useUserInputStore
} from "@/store/state";

import { ChevronUp } from "lucide-react";
import { type FormEvent, useEffect, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const UserInput = () => {
  const { userInput, setUserInput } = useUserInputStore();
  const {} = useAiModelAndUserInteractionStore();
  const textarea = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (textarea.current) {
      const textareaEl = textarea.current as HTMLTextAreaElement;

      if (textareaEl.value === "") {
        return null;
      }

      setUserInput(textareaEl.value);

      textareaEl.value = "";
    }
  };

  useEffect(() => {}, [userInput]);

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 flex w-full items-center border-t-[1px]
border-black/20 shadow-lg backdrop-blur-md"
    >
      <label className="flex w-full items-center justify-between gap-2 p-3">
        <TextareaAutosize
          ref={textarea}
          minRows={1}
          maxRows={5}
          placeholder="프롬프트를 입력하세요."
          className="w-full bg-transparent outline-none"
        />
        <button className="max-h-fit rounded-lg bg-black p-1 text-white">
          <ChevronUp />
        </button>
      </label>
    </form>
  );
};
