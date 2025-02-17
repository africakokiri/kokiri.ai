import { create } from "zustand";

interface UserInput {
  userInput: {
    id: number;
    userInput: string;
  }[];
  setUserInput: (input: string) => void;
}

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
