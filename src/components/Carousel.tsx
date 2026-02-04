"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ShiningButton from "./animata/button/shining-button";
import { useRouter } from "next/navigation";

function Carousel({ ...props }) {
  const counter = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const slider: HTMLElement | null = document.getElementById("slider");
    const bar: HTMLElement | null = document.getElementById("bar");

    const interval = setInterval(() => {
      // console.log(counter)
      if (slider) {
        if (counter.current === 5) {
          counter.current = 0;
          const nodes = slider.children;
          Array.from(nodes).forEach((node) =>
            node.classList.replace("opacity-0", "opacity-100")
          );
        } else {
          slider?.children[6 - counter.current - 1]?.classList.replace(
            "opacity-100",
            "opacity-0"
          );
          counter.current += 1;
        }
        const bars = bar?.children || [];
        Array.from(bars).forEach((node, index) => {
          if (index === counter.current) {
            node.classList.add("bg-black");
            node.classList.add("scale-125");
          } else {
            node.classList.remove("bg-black");
            node.classList.remove("scale-125");
          }
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        {...props}
        className="w-[100vw] md:h-[86vh] h-[90vh] animate-animate-appear cursor-pointer relative overflow-hidden m-auto"
      >
        <div
          className="w-full h-full absolute top-0 left-0 transition duration-500 scroll-smooth opacity-100"
          id="slider"
        >
          <Image
            src="/images/dp2.jpg"
            fill={true}
            alt=""
            className="absolute left-0 top-0 w-full md:h-full h-[90%] transition-opacity duration-500 opacity-100  md:object-fit object-cover"
          />
          <Image
            src="/images/dp3.jpg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-fit object-cover"
          />
          <Image
            src="/images/dp6.jpg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-fit object-cover"
          />
          <Image
            src="/images/dp7.jpg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-fit object-cover"
          />
          <Image
            src="/images/dp8.jpg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-fit object-cover"
          />
          <Image
            src="/images/iem.jpeg"
            fill={true}
            alt=""
            className="absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full object-fit h-[90%]"
            onLoad={(e) =>
              e.currentTarget.parentElement?.classList.replace(
                "opacity-0",
                "opacity-100"
              )
            }
          />

          <div
            id="bar"
            className="absolute flex items-center shadow-xl border-[1px] border-white justify-center gap-2 rounded-md bg-white opacity-60 px-2 md:bottom-10 bottom-56 left-[50%] translate-x-[-50%] p-1"
          >
            <div className="rounded-full size-2 border-[1px] border-black bg-black scale-125"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
            <div className="rounded-full size-2 border-[1px] border-black"></div>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-black/70 via-black/60 to-black/70 absolute z-40 flex flex-col items-center justify-center gap-4 md:gap-8 text-white px-6">
            <div className="text-center space-y-4 fade-in">
              <h1 className="md:text-7xl text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                IEM ICDC 2026
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center space-y-3 fade-in-delay-1">
              <p className="md:text-2xl text-lg font-semibold text-gray-100 max-w-4xl leading-relaxed">
                4th International Conference on
              </p>
              <p className="md:text-xl text-base text-gray-200 max-w-4xl">
                Computational Intelligence, Data Science and Cloud Computing
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 fade-in-delay-2">
              <h3 className="text-xl md:text-2xl font-semibold text-yellow-300">March 16-18, 2026</h3>
            </div>
            
            <div className="text-center space-y-2 fade-in-delay-3">
              <p className="md:text-lg text-sm font-medium text-gray-300">Organized by</p>
              <p className="md:text-base text-sm text-gray-200 max-w-3xl leading-relaxed">
                Department of Information Technology & Department of Computer Science & Engineering
              </p>
              <p className="md:text-base text-sm font-semibold text-gray-100">
                Institute of Engineering & Management, Kolkata, India
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 fade-in-delay-3">
              <ShiningButton
                label="Register Now"
                onClick={() => router.push("/registrations")}
              />
              <ShiningButton
                label="Learn More"
                onClick={() => window.scrollTo(0, 650)}
              />
              <ShiningButton
                label="Venue Details"
                onClick={() => router.push("/venue")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
