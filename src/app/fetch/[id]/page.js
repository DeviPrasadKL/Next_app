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
        <p className="flex gap-2"><p>Name :-</p> <span className="text-orange-500">{apiData.title}</span></p>
        <p className="flex gap-2"><p>Rating :-</p> <span className="text-yellow-500">{apiData.rating}</span></p>
        <p className="flex gap-2"><p>Popularity :-</p> <span className="text-lime-500">{apiData.popularity}</span></p>
        {apiData.broadcast.string && <p className="flex gap-2"><p>Broadcast :-</p>
          <span className="text-lime-400">{apiData.broadcast.string}</span>
        </p>}
        {apiData.background && <p className="flex w-3/4 gap-2"><p>Background:-</p> <span className="text-lime-300">{apiData.background}</span></p>}
        {apiData.synopsis && <p className="flex w-3/4 gap-2"><p>Synopsis:-</p> <span className="text-lime-200">{apiData.synopsis}</span></p>}
        {apiData.trailer.embed_url && <p className="flex gap-2"><p>Trailer :-</p> <a href={apiData.trailer.embed_url} target="_blank" className="text-blue-400">{apiData.trailer.embed_url}</a></p>}
      </div>}
    </>
  )
}
