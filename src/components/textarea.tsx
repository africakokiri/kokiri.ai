"use client";

import { cn } from "@/libs/shadcn/utils";

import { ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const Textarea = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      className="fixed bottom-4 left-0 mx-4 flex w-[calc(100dvw-32px)]
items-center justify-between rounded-lg border-[1px] border-black/20 pr-4
shadow-lg"
    >
      <TextareaAutosize
        autoFocus
        minRows={2}
        maxRows={5}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="프롬프트를 입력하세요."
        className="w-full rounded-lg px-4 py-2 outline-none"
      />
      <button
        disabled={userInput.length > 0 ? true : false}
        className={cn(
          "max-h-fit max-w-fit rounded-md bg-black p-[6px] text-white",
          userInput.length === 0 && "cursor-not-allowed bg-black/50"
        )}
      >
        <ChevronUpIcon strokeWidth={1} />
      </button>
    </form>
  );
};
