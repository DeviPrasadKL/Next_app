"use client"

import useFetch from "@/CustomHooks/useFetch";


export default function Page() {

  const[apiData, pending, error] = useFetch();

  console.log(apiData);

  const handleClick = () => {
    console.log("Hellooooooo");
  }

  return <div>
    Hello, Next.js! <br/>
    <button onClick={handleClick}>Click</button>
    {apiData && apiData.map((anime, index)=>{
      return (
        <h3>{anime.title}</h3>
      )
    })}
  </div>
}