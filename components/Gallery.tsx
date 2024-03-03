import { ENTRIES } from "@/util/Data";
import Image from "next/image";
import { useState } from "react";
import './Dropdown.css'

const Gallery = () => {
  return (
    <div>
      <div className="mb-4">
        <div className="dropdown inline-block relative z-10">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three is the magic number
              </a>
            </li>
          </ul>
        </div>
      </div>
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
