"use client";

import {
  type Interaction,
  useAiModelsStore,
  userInteractWithUserAndAiModelsStore
} from "@/store/state";

import { useMediaQuery } from "react-responsive";

const Mobile = () => {
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

const AiModelLayout = ({
  interaction,
  modelName
}: {
  interaction: Interaction;
  modelName: string;
}) => {
  return (
    <div className="flex flex-col items-end">
      <p className="rounded-lg bg-neutral-200 px-2 py-1">
        {interaction.userInput}
      </p>
      <p className="w-full text-start">{interaction[modelName]}</p>
    </div>
  );
};

const Desktop = () => {
  const { interactions } = userInteractWithUserAndAiModelsStore();

  return (
    <div className="absolute left-0 top-0 flex w-full gap-8 p-8">
      {interactions.map((interaction) => {
        return (
          <div
            key={interaction.id}
            className="flex w-full gap-8 *:w-1/3"
          >
            <AiModelLayout
              interaction={interaction}
              modelName="ChatGPT"
            />
            <AiModelLayout
              interaction={interaction}
              modelName="Gemini"
            />
            <AiModelLayout
              interaction={interaction}
              modelName="Claude"
            />
          </div>
        );
      })}
    </div>
  );
};

export const AiModelsInteraction = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });

  if (isDesktop) {
    return <Desktop />;
  }

  return <Mobile />;
};
