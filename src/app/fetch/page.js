"use client"

import useFetch from "@/CustomHooks/useFetch";
import Card from "./Card";
import Image from "next/image";

export default function Page() {

  const [apiData, pending, error] = useFetch();

  console.log(apiData);

  const handleClick = () => {
    console.log("Hellooooooo");
  }

  return (
    <div className="p-3">
      <div className="flex gap-2">
        <p>Hello</p>
        <button onClick={handleClick}>Click</button>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {apiData && apiData.map((anime, index) => {
          return (
            <div className="flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-stone-800 ">
              <Image
                src={anime.images.jpg.image_url}
                alt="Anime Image"
                width={200}
                height={300}
                priority
              // layout="fit"
              />
              <div>
                <Card key={anime.name} anime={anime} />
              </div>
            </div>
          )
        })}
      </div>
    </div>)
}