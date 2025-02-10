import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const aiList = ["ChatGPT", "Gemini", "Claude"].map((item, index) => {
  return {
    id: index,
    name: item
  };
});

export function CarouselDemo() {
  return (
    <Carousel
      className="h-full w-full *:h-full"
      opts={{
        loop: true
      }}
    >
      <CarouselContent className="h-full">
        {aiList.map(({ id, name }, index) => {
          return (
            <CarouselItem
              key={id}
              className="h-full"
            >
              <div
                className="flex h-full items-center justify-center
border-[1px] border-black"
              >
                <span className="text-4xl font-semibold">
                  {index + 1}
                  {name}
                  ae aerg
                </span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
