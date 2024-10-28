interface MoviesProps {
	src: string,
	alt: string
}

interface Movie {
	CardMovies : MoviesProps
}


function CardFabrice({CardMovies} : Movie) {
	return (
		<div className="slider">
			<figure className='slider__card'>
				<img className='slider__img' src={CardMovies.src} alt={CardMovies.alt} />
			</figure>
		</div>
	)
}

export default CardFabrice;