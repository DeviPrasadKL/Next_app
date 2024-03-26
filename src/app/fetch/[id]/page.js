"use client"
import useFetch from "@/CustomHooks/useFetch";
import Image from "next/image";

export default function page({ params }) {
  const [apiData, pending] = useFetch(`https://api.jikan.moe/v4/anime/${params.id}`);

  return (
    <>
      {!pending && <div className="flex flex-col items-center justify-center gap-4 p-6 duration-200 ease-in rounded-lg bg-stone-800" >
        <Image
          src={apiData.images.jpg.image_url}
          alt="Anime Image"
          width={250}
          height={350}
          // layout="fit"
          className="duration-300 ease-in-out hover:scale-110"
        />
        <p className="flex gap-2"><p>Name :-</p> <span>{apiData.title}</span></p>
        <p className="flex gap-2"><p>Rating :-</p> <span>{apiData.rating}</span></p>
        <p className="flex gap-2"><p>Popularity :-</p> <span>{apiData.popularity}</span></p>
        <p className="flex gap-2"><p>Broadcast :-</p>
          <span>{apiData.broadcast.string}</span>
        </p>
        <p className="flex w-3/4 gap-2"><p>Background:-</p> <span>{apiData.background}</span></p>
        <p className="flex w-3/4 gap-2"><p>Synopsis:-</p> <span>{apiData.synopsis}</span></p>
        {apiData.trailer.embed_url && <p className="flex gap-2"><p>Trailer :-</p> <span>{apiData.trailer.embed_url}</span></p>}
      </div>}
    </>
  )
}
