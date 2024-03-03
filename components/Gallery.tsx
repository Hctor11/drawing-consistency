import { ENTRIES } from "@/util/Data"
import Image from "next/image"

const Gallery = () => {
  return (
    <div className="columns-1 gap-2 sm:columns-2 sm:gap-3 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      {ENTRIES.map((item)=>(
        <>
          <Image src={item.image}  width={200} height={300} alt={item.description} className="rounded-md" />
        </>
      ))}
    </div>
  )
}

export default Gallery