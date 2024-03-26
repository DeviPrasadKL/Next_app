"use client"

import useFetch from "@/CustomHooks/useFetch";
import Card from "./Card";

export default function Page() {

  const [apiData, pending, error] = useFetch();

  console.log(apiData);

  const handleClick = () => {
    console.log("Hellooooooo");
  }

  return (
    <div className="p-3">
      Hello <br />
      <button onClick={handleClick}>Click</button>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {apiData && apiData.map((anime, index) => {
          return (
            <div  className="p-2 bg-slate-600">
              <Card key={anime.name} anime={anime} />
            </div>
          )
        })}
      </div>
    </div>)
}