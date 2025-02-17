import { AiModelsHeader } from "@/components/ai-models-header";
import { AiModelsInteraction } from "@/components/ai-models-interaction";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div>
      <AiModelsHeader />
      <AiModelsInteraction />
      <UserInput />
    </div>
  );
}
