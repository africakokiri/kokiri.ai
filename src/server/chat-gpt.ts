"use server";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

export const ChatGPT = async (prompt: string) => {
  const response = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o-mini"
  });

  return response.choices[0].message.content;
};
