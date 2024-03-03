import { ENTRIES } from "@/util/Data";
import Image from "next/image";
import { useState } from "react";
import './Dropdown.css'

const Gallery = () => {
  return (
    <div>       
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        <div className="">
          {ENTRIES.map((item) => (
            <>
              <div className="group relative mb-2">
                <Image
                  className="rounded-md object-cover"
                  src={item.image}
                  width={200}
                  height={300}
                  alt={item.description}
                />
                <div className=" rounded-md absolute p-10 top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-zinc-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <h1 className="text-xs text-white mb-4">
                    {item.description}
                  </h1>
                  <h2 className="text-xs text-zinc-400">{item.date}</h2>
                </div>
              </div>
              {/* <Image
            src={item.image}
            width={200}
            height={300}
            alt={item.description}
            className="rounded-md"
          /> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
