import { create } from "zustand";

interface AiModels {
  aiModels: {
    id: number;
    name: string;
    imageSrc: string;
  }[];
}

const aiModels = ["ChatGPT", "Gemini", "Claude"].map((item, index) => {
  return {
    id: index,
    name: item,
    imageSrc: `/ai-models-logo/${item}.svg`
  };
});

export const useAiModelsStore = create<AiModels>((set) => ({
  aiModels
}));
