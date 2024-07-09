"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

const GameList = () => {
  return (
    <div className="py-5">
      <h1 className="text-3xl flex items-center justify-center">
        <span className="">Games List</span>
      </h1>
      {/* Updated to include reduced card size and proper spacing */}
      <div className="max-h-[75vh] overflow-y-auto p-4 gap-12 mt-2 flex flex-wrap items-center justify-center">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-64 w-[60vw]" // Reduced card size
            key={item.id}
          >
            <Link href={item.link}>
              <PinContainer
                title="Griffin"
                href="https://twitter.com/"
              >
                <div className="relative flex items-center justify-center sm:w-64 w-[60vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" className="rounded-lg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Play Game
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
