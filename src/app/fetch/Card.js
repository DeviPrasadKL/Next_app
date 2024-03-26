export default function Card({ anime }) {

    return (
        <>
            <h2>Rating:- {anime.rating}</h2>
            <div className="flex ">
                <p>genres :-</p>
                <div>
                    {anime.genres.map((el, index) => {
                        return (
                            <h2 key={el.name + index}> {el.name}</h2>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
