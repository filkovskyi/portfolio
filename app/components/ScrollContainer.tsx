"use client";

import HorizontalScrollContainer from "@/app/components/HorizontalScrollContainer";

function ScrollContainer() {
  return (
    <div className="wrapper">
      <div className="h-screen w-full flex items-center justify-center bg-slate-500">
        <h1 className="text-white text-7xl font-bold text-center p-24">Hero</h1>
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-blue-500">
        <h2 className="text-white text-7xl font-bold text-center p-24">
          About Me | Pitch
        </h2>
      </div>
      <div className="h-[300vh] w-full bg-yellow-500">
        <HorizontalScrollContainer />
      </div>
      <div className="h-screen w-full flex items-center justify-center bg-lime-500">
        <h2 className="text-white text-7xl font-bold text-center p-24">
          Hire Me
        </h2>
      </div>
    </div>
  );
}

export default ScrollContainer;
