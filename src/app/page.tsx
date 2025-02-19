import { AiModelsConversation } from "@/components/ai-models-conversation";
import { AiModelsHeader } from "@/components/ai-models-header";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div>
      <div className="pb-[64px]">
        <AiModelsHeader />
      </div>
      <AiModelsConversation />
      <div className="pt-[64px]">
        <UserInput />
      </div>
    </div>
  );
}
