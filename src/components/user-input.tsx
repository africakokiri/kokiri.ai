"use client";

import { useConversationStore } from "@/store/state";

import { ChevronUp } from "lucide-react";
import { type FormEvent, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const UserInput = () => {
  const { addConversation } = useConversationStore();
  const textarea = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (textarea.current) {
      const textareaEl = textarea.current as HTMLTextAreaElement;

      if (textareaEl.value === "") {
        return null;
      }

      addConversation(textareaEl.value);

      textareaEl.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 flex w-full items-center border-t-[1px]
border-black/20 shadow-lg backdrop-blur-md md:bottom-4 md:left-1/4 md:w-1/2
md:rounded-lg md:border-[1px]"
    >
      <label
        className="flex w-full items-center justify-between gap-2 p-3
hover:cursor-text"
      >
        <TextareaAutosize
          ref={textarea}
          minRows={1}
          maxRows={5}
          autoFocus
          placeholder="프롬프트를 입력하세요."
          className="w-full resize-none bg-transparent outline-none"
        />
        <button className="max-h-fit rounded-lg bg-black p-1 text-white">
          <ChevronUp />
        </button>
      </label>
    </form>
  );
};
