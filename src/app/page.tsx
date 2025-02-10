import { CarouselDemo } from "@/components/carousel-display";
import { Textarea } from "@/components/textarea";

export default function page() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <CarouselDemo />
      <Textarea />
    </div>
  );
}
