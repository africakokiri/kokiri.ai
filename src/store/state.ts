import { create } from "zustand";

interface UserInput {
  userInput: {
    id: number;
    userInput: string;
  }[];
  setUserInput: (input: string) => void;
}

// 사용자 입력
export const useUserInputStore = create<UserInput>((set) => ({
  userInput: [],
  setUserInput: (input) =>
    set((state) => ({
      userInput: [
        ...state.userInput,
        {
          id: Date.now(),
          userInput: input
        }
      ]
    }))
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
  aiModels: ["ChatGPT", "Gemini", "Claude"].map((item, index) => ({
    id: index,
    name: item,
    imgSrc: `/ai-models/${item}.svg`,
    selected: index === 0
  })),
  selectAiModel: (aiModelId) =>
    set((state) => ({
      aiModels: state.aiModels.map((model) => ({
        ...model,
        selected: model.id === aiModelId
      }))
    }))
}));
