import { AiInteraction } from "@/components/ai-interaction";
import { AiModelsList } from "@/components/ai-models-list";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div>
      <div className="flex">
        <AiModelsList />
        <div className="px-4 pt-[82px]">
          <AiInteraction />
        </div>
      </div>
      <UserInput />
    </div>
  );
}
