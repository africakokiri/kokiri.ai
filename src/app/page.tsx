import { AiModelsHeader } from "@/components/ai-models-header";
import { AiModelsInteraction } from "@/components/ai-models-interaction";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div>
      <div className="pt-[64px]">
        <AiModelsHeader />
      </div>
      {/* <AiModelsInteraction /> */}
      <div className="pb-[64px]">
        <UserInput />
      </div>
    </div>
  );
}
