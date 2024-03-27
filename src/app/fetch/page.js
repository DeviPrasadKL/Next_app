"use client"

import useFetch from "@/CustomHooks/useFetch";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

  const [apiData, pending, error] = useFetch("https://api.jikan.moe/v4/anime");

  return (
    <div className="p-3">
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {apiData && apiData.map((anime, index) => {
          return (
            <Link href={`/fetch/${anime.mal_id}`} key={anime.mal_id} className="flex flex-col items-center justify-center gap-4 p-2 duration-200 ease-in rounded-lg hover:border-gray-400 bg-stone-800 hover:border-2 hover:scale-105">
              <Image
                className="duration-300 ease-in-out hover:scale-110"
                src={anime.images.jpg.image_url}
                alt="Anime Image"
                height={250}
                width={150}
                // layout="fit"
              />
              <div>
                <Card anime={anime} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}