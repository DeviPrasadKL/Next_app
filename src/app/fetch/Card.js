'use client'
import Image from "next/image";

export default function Card({ anime }) {
    console.log("Card = ", anime.name);

    return (
        <div>
            {/* <Image
                src="https://myanimelist.net/anime/1/Cowboy_Bebop.jpg"
                alt="Anime Image"
                // width={100}
                // height={100}
                layout="fill"
            /> */}
            <h2>Name :- {anime.title}</h2>
            {anime.genres.map((el, index)=>{
                return (
                    <h2 key={el.name + index}>genres :- {el.name}</h2>
                )
            })}
            <h2>Rating:- {anime.rating}</h2>
        </div>
    )
}
