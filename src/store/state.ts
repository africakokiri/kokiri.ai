import { create } from "zustand";

interface AiModel {
  id: number;
  name: string;
  imageSrc: string;
}

interface AiModels {
  aiModels: AiModel[];
  selectedAiModel: AiModel;
  setSelectedAiModel: (aiModel: AiModel) => void;
}

const aiModels = ["ChatGPT", "Gemini", "Claude"].map((item, index) => {
  return {
    id: index,
    name: item,
    imageSrc: `/ai-models-logo/${item}.svg`
  };
});

export const useAiModelsStore = create<AiModels>((set) => ({
  aiModels,
  selectedAiModel: aiModels[0],
  setSelectedAiModel: (aiModel) => set({ selectedAiModel: aiModel })
}));
