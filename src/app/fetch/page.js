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
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {apiData && apiData.map((anime, index) => {
          return (
            <div className="flex flex-col items-center justify-center gap-4 p-2 duration-200 ease-in rounded-lg hover:border-gray-400 bg-stone-800 hover:border-2 hover:scale-105">
              <Image
                src={anime.images.jpg.image_url}
                alt="Anime Image"
                width={150}
                height={250}
                priority
              // layout="fit"
              className="duration-300 ease-in-out hover:scale-110"
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