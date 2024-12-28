"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Image from "next/image";
import portfolio_1 from "@/public/portfolio_1.png";
import portfolio_2 from "@/public/portfolio_2.png";
import portfolio_3 from "@/public/portfolio_3.png";

function HorizontalScrollContainer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);
  return (
    <div className="h-[100vh] w-full sticky top-0 flex justify-start items-center overflow-hidden">
      <h2 className="text-white text-7xl font-bold text-center p-24">
        Portfolio
      </h2>
      <motion.div style={{ x }} className="flex">
        <div className="flex-1 w-[1400px] h-screen bg-red-200">
          <div className="flex flex-col justify-center items-center gap-24">
            <h2 className="font-bold text-5xl text-white">Portfolio 1</h2>
            <Image
              src={portfolio_1}
              width={1024}
              height={1024}
              alt="portfolio_1"
            />
          </div>
        </div>
        <div className="flex-1 w-[1400px] h-screen bg-red-300">
          <div className="flex flex-col justify-center items-center gap-24">
            <h2 className="font-bold text-5xl text-white">Portfolio 2</h2>
            <Image
              src={portfolio_2}
              width={1024}
              height={1024}
              alt="portfolio_1"
            />
          </div>
        </div>
        <div className="flex-1 w-[1400px] h-screen bg-red-400">
          <div className="flex flex-col justify-center items-center gap-24">
            <h2 className="font-bold text-5xl text-white">Portfolio 3</h2>
            <Image
              src={portfolio_3}
              width={1024}
              height={1024}
              alt="portfolio_1"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HorizontalScrollContainer;
