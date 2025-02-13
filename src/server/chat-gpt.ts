"use server";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const CHAT_GPT_STREAM = async ({ prompt }: { prompt: string }) => {
  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hi" }],
    stream: true
  });

  return stream;
};
