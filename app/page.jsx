"use client"
export default function Page() {

  const handleClick = () => {
    console.log("Hellooooooo");
  }

  return <div>
    Hello, Next.js! <br/>
    <button onClick={handleClick}>Click</button>
  </div>
}