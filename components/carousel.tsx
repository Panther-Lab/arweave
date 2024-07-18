import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const HeaderCarousel = () => {
  return (
    <div className="flex flex-col gap-6">
          <div className="bg-[#222] rounded-lg shadow-lg overflow-hidden">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="relative h-[300px] w-full">
                    <img
                      src="/placeholder.svg"
                      alt="Game 1"
                      className="object-cover w-full h-full"
                      width={800}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">Retro Arcade</h3>
                      <p className="text-lg">Experience the thrill of classic gaming</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[300px] w-full">
                    <img
                      src="/placeholder.svg"
                      alt="Game 2"
                      className="object-cover w-full h-full"
                      width={800}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">Pixel Platformer</h3>
                      <p className="text-lg">Jump, run, and conquer the retro world</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative h-[300px] w-full">
                    <img
                      src="/placeholder.svg"
                      alt="Game 3"
                      className="object-cover w-full h-full"
                      width={800}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">Neon Racer</h3>
                      <p className="text-lg">Blaze through the neon-lit tracks</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#ff6b6b] hover:bg-[#e65252] transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                <ChevronLeftIcon className="w-5 h-5 text-[#1a1a1a]" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#ff6b6b] hover:bg-[#e65252] transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                <ChevronRightIcon className="w-5 h-5 text-[#1a1a1a]" />
              </CarouselNext>
            </Carousel>
          </div>
    </div>
  )
}

export default HeaderCarousel


function ChevronLeftIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronRightIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }