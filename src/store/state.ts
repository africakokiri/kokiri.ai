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

interface UserAndAiModelsInteraction {
  interaction: {
    id: number;
    userInput: string;
    ChatGPT: string;
    Gemini: string;
    Claude: string;
  }[];
}

export const useUserAndAiModelsInteractionStore = create((set) => ({
  interaction: []
}));
