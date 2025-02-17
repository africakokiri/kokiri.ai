"use client";

import { useUserInputStore } from "@/store/state";

import { ChevronUp } from "lucide-react";
import { type FormEvent, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const UserInput = () => {
  const { setUserInput } = useUserInputStore();
  const textAreaRef = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (textAreaRef.current) {
      const textarea = textAreaRef.current as HTMLTextAreaElement;
      setUserInput(textarea.value);

      textarea.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 flex w-full items-center border-t-[1px]
border-black/20 shadow-lg"
    >
      <label className="flex w-full items-center justify-between gap-2 p-3">
        <TextareaAutosize
          ref={textAreaRef}
          minRows={1}
          maxRows={5}
          placeholder="프롬프트를 입력하세요."
          className="w-full outline-none"
        />
        <button className="max-h-fit rounded-lg bg-black p-1 text-white">
          <ChevronUp />
        </button>
      </label>
    </form>
  );
};
