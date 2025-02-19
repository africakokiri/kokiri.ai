import { FETCH_CHAT_GPT } from "@/server/chat-gpt";
import { FETCH_CLAUDE } from "@/server/claude";
import { FETCH_GEMINI } from "@/server/gemini";

import { create } from "zustand";

const aiModels = ["ChatGPT", "Gemini", "Claude"].map((item, index) => ({
  id: index,
  name: item,
  imgSrc: `/ai-models/${item}.svg`,
  selected: index === 0
}));

interface AiModel {
  aiModels: {
    id: number;
    name: string;
    imgSrc: string;
    selected: boolean;
  }[];
  selectAiModel: (aiModelId: number) => void;
}

// AI 모델 리스트, 선택된 AI 모델
export const useAiModelsStore = create<AiModel>((set) => ({
  aiModels,
  selectAiModel: (aiModelId) =>
    set((state) => ({
      aiModels: state.aiModels.map((model) => ({
        ...model,
        selected: model.id === aiModelId
      }))
    }))
}));

interface InteractWithUserAndAiModels {
  interactions: {
    id: number;
    userInput: string;
    ChatGPT: string;
    Gemini: string;
    Claude: string;
  }[];
  addInteraction: (userInput: string) => void;
}

export const userInteractWithUserAndAiModelsStore =
  create<InteractWithUserAndAiModels>((set) => ({
    interactions: [],
    addInteraction: (userInput) => {
      const id = Date.now();

      set((state) => ({
        interactions: [
          ...state.interactions,
          {
            id,
            userInput,
            ChatGPT: "",
            Gemini: "",
            Claude: ""
          }
        ]
      }));

      FETCH_CHAT_GPT(userInput).then((res) =>
        set((state) => ({
          interactions: state.interactions.map((interaction) =>
            interaction.id === id
              ? { ...interaction, ChatGPT: res }
              : interaction
          )
        }))
      );

      FETCH_GEMINI(userInput).then((res) =>
        set((state) => ({
          interactions: state.interactions.map((interaction) =>
            interaction.id === id
              ? { ...interaction, Gemini: res }
              : interaction
          )
        }))
      );

      FETCH_CLAUDE(userInput).then((res) =>
        set((state) => ({
          interactions: state.interactions.map((interaction) =>
            interaction.id === id
              ? { ...interaction, Claude: res }
              : interaction
          )
        }))
      );
    }
  }));
