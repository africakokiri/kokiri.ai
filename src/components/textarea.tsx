"use client";

import { DarkmodeSwitch } from "@/components/ui/darkmode-switch";

import { ChevronUp } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export const Textarea = () => {
  return (
    <form
      className="flex flex-col gap-2 rounded-md border-[1px] border-black
shadow-lg dark:border-white"
    >
      <TextareaAutosize
        maxRows={10}
        className="h-full w-full rounded-md px-4 py-2 outline-none
dark:bg-black"
        autoFocus
        placeholder="프롬프트를 입력하세요."
      />
      <div className="flex items-center justify-between px-4 pb-2">
        <DarkmodeSwitch />
        <button
          type="submit"
          className="rounded-md bg-black p-1 text-white dark:invert"
        >
          <ChevronUp strokeWidth={1.5} />
        </button>
      </div>
    </form>
  );
};
