import { AiModelsCarousel } from "@/components/ai-models-carousel";
import { Textarea } from "@/components/textarea";

export default function page() {
  return (
    <div className="p-4">
      <AiModelsCarousel />
      <Textarea />
    </div>
  );
}
