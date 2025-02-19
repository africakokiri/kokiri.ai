"use client";

import {
  type AiModelNames,
  type Conversation,
  useConversationStore,
  useSelectAiModelsStore
} from "@/store/state";

import { useMediaQuery } from "react-responsive";

const Mobile = () => {
  const { aiModels } = useSelectAiModelsStore();
  const { conversations } = useConversationStore();

  if (conversations) {
    return (
      <div className="space-y-4">
        {conversations.map((conversation) => {
          return (
            <div
              key={conversation.id}
              className="space-y-4"
            >
              <div className="flex w-full justify-end">
                <p className="mx-4 rounded-lg bg-neutral-200 px-2 py-1">
                  {conversation.userInput}
                </p>
              </div>
              <div className="flex w-full justify-start">
                <p className="mx-4 rounded-lg px-2 py-1">
                  {aiModels.map(({ name, selected }) => {
                    if (selected) {
                      return conversation.responses[name].message;
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
  conversation,
  modelName
}: {
  conversation: Conversation;
  modelName: AiModelNames;
}) => {
  return (
    <div className="flex flex-col items-end gap-4">
      <p className="rounded-lg bg-neutral-200 px-2 py-1">
        {conversation.userInput}
      </p>
      <p className="w-full text-start">
        {conversation.responses[modelName].message}
      </p>
    </div>
  );
};

const Desktop = () => {
  const { conversations } = useConversationStore();

  return (
    <div className="absolute left-0 top-0 flex w-full gap-8 p-8">
      {conversations.map((conversation) => {
        return (
          <div
            key={conversation.id}
            className="flex w-full gap-8 *:w-1/3"
          >
            <AiModelLayout
              conversation={conversation}
              modelName="ChatGPT"
            />
            <AiModelLayout
              conversation={conversation}
              modelName="Gemini"
            />
            <AiModelLayout
              conversation={conversation}
              modelName="Claude"
            />
          </div>
        );
      })}
    </div>
  );
};

export const AiModelsConversation = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });

  if (isDesktop) {
    return <Desktop />;
  }

  return <Mobile />;
};
