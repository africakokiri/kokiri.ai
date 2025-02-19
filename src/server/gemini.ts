"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const FETCH_GEMINI = async (prompt: string) => {
  const chatSession = model.startChat({
    history: []
  });

  const result = await chatSession.sendMessage(prompt);

  return result.response.text();
};
