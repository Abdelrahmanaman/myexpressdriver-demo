"use client";

import Image from "next/image";

const marqueeItems = [
  {
    src: "/c1.webp",
  },
  {
    src: "/c2.webp",
  },
  {
    src: "/c4.webp",
  },
  {
    src: "/c5.webp",
  },
  {
    src: "/c3.webp",
  },
];

export default function PartnerSlider() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="mb-4 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex w-[200%] gap-4 pr-4"
          style={{
            animation: "marquee 15s linear infinite",
          }}
        >
          {[0, 1].map((index) => (
            <div className="flex flex-1 gap-4" key={index}>
              {marqueeItems.map((item) => (
                <div className="flex-1" key={item.src}>
                  <Image
                    src={item.src}
                    className="aspect-auto"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
