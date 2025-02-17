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

interface UserAndAiModelInteraction {
  chatInteraction: {
    id: number;
    userInput: string;
    responses: {
      [key: string]: string;
    };
  }[];
  addUserInput: (userInput: string) => number;
  addAiResponse: (id: number, modelName: string, response: string) => void;
}

// 유저 Input, AI 모델 Input 저장
export const useUserAndAiModelInteractionStore =
  create<UserAndAiModelInteraction>((set) => ({
    chatInteraction: [],
    addUserInput: (userInput) => {
      const newId = Date.now();

      set((state) => ({
        chatInteraction: [
          ...state.chatInteraction,
          {
            id: newId,
            userInput,
            responses: {}
          }
        ]
      }));

      return newId;
    },
    addAiResponse: (id, modelName, response) => {
      set((state) => ({
        chatInteraction: state.chatInteraction.map((chatInteraction) =>
          chatInteraction.id === id
            ? {
                ...chatInteraction,
                responses: {
                  ...chatInteraction.responses,
                  [modelName]: response
                }
              }
            : chatInteraction
        )
      }));
    }
  }));
