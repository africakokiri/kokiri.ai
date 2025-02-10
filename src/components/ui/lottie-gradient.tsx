"use client";

import gradient from "../../../public/lottie/gradient-3.json";

import Lottie from "react-lottie-player";

export const LottieGradient = () => {
  return (
    <div
      className="absolute left-0 top-0 -z-10 flex h-dvh w-dvw items-center
justify-center"
    >
      <Lottie
        loop
        play
        animationData={gradient}
        className="h-2/3 w-2/3"
      />
    </div>
  );
};
