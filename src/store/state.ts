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

interface UserInput {
  userInput: string;
  setUserInput: (input: string) => void;
}

interface CompletedUserInput {
  completedUserInput: string[];
  setCompletedUserInput: (userInput: string) => void;
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

export const useUserInputStore = create<UserInput>((set) => ({
  userInput: "",
  setUserInput: (input) => set({ userInput: input })
}));

export const useCompletedUserInputStore = create<CompletedUserInput>(
  (set) => ({
    completedUserInput: [],
    setCompletedUserInput: (userInput) =>
      set({
        completedUserInput: [...completedUserInput, userInput]
      })
  })
);
