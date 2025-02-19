"use client";

import {
  useAiModelsStore,
  useInteractWithUserAndAiModelsStore
} from "@/store/state";

import { useEffect, useState } from "react";

export const AiModelsInteraction = () => {
  const { interaction } = useInteractWithUserAndAiModelsStore();
  const { aiModels } = useAiModelsStore();
  const [selectedAiModel, setSelectedAiModel] = useState("ChatGPT");

  useEffect(() => {
    console.log(interaction);
  }, [interaction]);

  useEffect(() => {
    const selected = aiModels.find((model) => model.selected);

    if (selected) {
      setSelectedAiModel(selected.name);
    }
  }, [aiModels]);

  return (
    <div>
      {interaction.map((items) => {
        if (items.status === "fulfilled" || items.userInput) {
          return (
            <div key={items.id}>
              <div className="flex w-full justify-end">
                <p className="mx-4 rounded-lg bg-neutral-200 px-2 py-1">
                  {items.userInput}
                </p>
              </div>
              <div className="flex w-full justify-start">
                <p className="mx-4 rounded-lg px-2 py-1">
                  {items[selectedAiModel]}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );

  // if (interaction) {
  //   return (
  //     <div>
  //       {interaction.map((keys) => {
  //         if (keys.status === "fulfilled" || keys.userInput) {
  //           return (
  //             <div key={keys.id}>
  //               <div className="flex w-full justify-end">
  //                 <p className="mx-4 rounded-lg bg-neutral-200 px-2 py-1">
  //                   {keys.userInput}
  //                 </p>
  //               </div>
  //               <div className="flex w-full justify-start">
  //                 <p className="mx-4 rounded-lg px-2 py-1">
  //                   {aiModels.map(({ selected, name }) => {
  //                     if (selected) {
  //                       return interaction[interaction.length - 1][name];
  //                     }
  //                   })}
  //                 </p>
  //               </div>
  //             </div>
  //           );
  //         }
  //       })}
  //     </div>
  //   );
  // }
};
