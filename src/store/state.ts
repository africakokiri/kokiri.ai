import { ChatGPT } from "@/server/chat-gpt";
import { Claude } from "@/server/claude";
import { Gemini } from "@/server/gemini";

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

interface Interaction {
  id: number;
  userInput: string;
  ChatGPT?: string;
  Gemini?: string;
  Claude?: string;
  status: "pending" | "rejected" | "fulfilled";
}

interface InteractWithUserAndAiModels {
  interaction: Interaction[];
  interactWithUserAndAiModels: (userInput: string) => void;
}

export const useInteractWithUserAndAiModelsStore =
  create<InteractWithUserAndAiModels>((set) => ({
    interaction: [],
    interactWithUserAndAiModels: (userInput) => {
      const newInteraction: Interaction = {
        id: Date.now(),
        userInput,
        status: "pending"
      };

      set((state) => ({
        interaction: [...state.interaction, newInteraction]
      }));

      (async () => {
        const [gpt, gemini, claude] = await Promise.all([
          ChatGPT(userInput),
          Gemini(userInput),
          Claude(userInput)
        ]);

        set((state) => ({
          interaction: state.interaction.map((interaction) =>
            interaction.id === newInteraction.id
              ? {
                  ...interaction,
                  ChatGPT: gpt,
                  Gemini: gemini,
                  Claude: claude,
                  status: "fulfilled"
                }
              : interaction
          )
        }));
      })();
    }
  }));
