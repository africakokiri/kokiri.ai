import { Contents } from "@/components/contents";
import { Textarea } from "@/components/textarea";

export default function page() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <Contents />
      <Textarea />
    </div>
  );
}
