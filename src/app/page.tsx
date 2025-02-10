import { Contents } from "@/components/contents";
import { Header } from "@/components/header";
import { Textarea } from "@/components/textarea";

export default function page() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
      <Header />
      <Contents />
      <Textarea />
    </div>
  );
}
