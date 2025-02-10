import { create } from "zustand";

interface AiModelsStore {
  aiModels: {
    id: number;
    name: string;
    isSelected?: boolean;
  }[];
  setAiModel: (selectedIndex: number) => void;
}

export const useAiModelsStore = create<AiModelsStore>((set) => ({
  aiModels: ["ChatGPT", "Gemini", "Claude"].map((item, index) => {
    return {
      id: index,
      name: item,
      isSelected: index === 0 ? true : false
    };
  }),
  setAiModel: (selectedIndex) =>
    set((state) => ({
      aiModels: state.aiModels.map((aiModel, index) => {
        return {
          ...aiModel,
          isSelected: index === selectedIndex
        };
      })
    }))
}));
