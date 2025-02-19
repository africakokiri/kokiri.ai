"use client";

import {
  useAiModelsStore,
  userInteractWithUserAndAiModelsStore
} from "@/store/state";

export const AiModelsInteraction = () => {
  const { aiModels } = useAiModelsStore();
  const { interactions } = userInteractWithUserAndAiModelsStore();

  if (interactions) {
    return (
      <div className="space-y-4">
        {interactions.map((interaction) => {
          return (
            <div
              key={interaction.id}
              className="space-y-4"
            >
              <div className="flex w-full justify-end">
                <p className="mx-4 rounded-lg bg-neutral-200 px-2 py-1">
                  {interaction.userInput}
                </p>
              </div>
              <div className="flex w-full justify-start">
                <p className="mx-4 rounded-lg px-2 py-1">
                  {aiModels.map(({ name, selected }) => {
                    if (selected) {
                      return interaction[name];
                    }
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
