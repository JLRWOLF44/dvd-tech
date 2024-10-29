import { MoviesProps } from "./baseMovies";

function CardFabrice({CardMovies} : {CardMovies : MoviesProps}) {
	return (
		<div className="slider">
			<figure className='slider__card'>
				<img className='slider__img' src={CardMovies.src} alt={CardMovies.alt} />
			</figure>
		</div>
	)
}

export default CardFabrice;