import { FETCH_CHAT_GPT } from "@/server/chat-gpt";
import { FETCH_CLAUDE } from "@/server/claude";
import { FETCH_GEMINI } from "@/server/gemini";

import { create } from "zustand";

const aiModelNames = ["ChatGPT", "Gemini", "Claude"] as const;

export type AiModelNames = (typeof aiModelNames)[number];

const aiModels = aiModelNames.map((item, index) => ({
  id: index,
  name: item,
  imgSrc: `/ai-models/${item}.svg`,
  selected: index === 0
}));

interface SelectAiModels {
  aiModels: {
    id: number;
    name: AiModelNames;
    imgSrc: string;
    selected: boolean;
  }[];
  selectAiModel: (aiModelId: number) => void;
}

// 선택된 AI 모델과 AI 모델들의 목록을 저장하는 Store
export const useSelectAiModelsStore = create<SelectAiModels>((set) => ({
  aiModels,
  selectAiModel: (aiModelId) =>
    set((state) => ({
      aiModels: state.aiModels.map((model) => ({
        ...model,
        selected: model.id === aiModelId
      }))
    }))
}));

interface AiResponse {
  message: string;
  status: "loading" | "completed";
}

export interface Conversation {
  id: number;
  userInput: string;
  responses: Record<AiModelNames, AiResponse>;
}

interface Conversations {
  conversations: Conversation[];
  addConversation: (userInput: string) => void;
}

const FETCH_AI_MODELS = {
  ChatGPT: FETCH_CHAT_GPT,
  Gemini: FETCH_GEMINI,
  Claude: FETCH_CLAUDE
};

// 사용자와 유저 간의 대화 기록을 저장하는 Store
export const useConversationStore = create<Conversations>((set) => ({
  conversations: [],
  addConversation: (userInput) => {
    const id = Date.now();

    // 기존의 대화 기록 유지하고 배열 내의 새로운 객체 추가
    set((state) => ({
      conversations: [
        ...state.conversations,
        {
          id,
          userInput,
          responses: Object.fromEntries(
            aiModelNames.map((name) => [
              name,
              {
                message: "",
                status: "loading"
              }
            ])
          ) as Record<AiModelNames, AiResponse>
        }
      ]
    }));

    aiModelNames.forEach((aiModel) => {
      FETCH_AI_MODELS[aiModel](userInput).then((res) =>
        set((state) => ({
          conversations: state.conversations.map((conversation) =>
            conversation.id === id
              ? {
                  ...conversation,
                  responses: {
                    ...conversation.responses,
                    [aiModel]: {
                      message: res,
                      status: "completed"
                    }
                  }
                }
              : conversation
          )
        }))
      );
    });
  }
}));
