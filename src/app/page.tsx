import { AiModelsList } from "@/components/ai-models-list";
import { UserInput } from "@/components/user-input";

export default function page() {
  return (
    <div>
      <AiModelsList />
      <UserInput />
    </div>
  );
}
