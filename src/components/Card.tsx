// import "../assets/styles/Card.css";
// import { useState } from "react";
// import "../App.css"

// interface CardI {
// 	firstname: string;
// 	imgSrc: string;
// }

// function Card({ firstname, imgSrc }: CardI) {
// 	const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
	
// const toggleVisibility = () => {
//   setIsVisible(!isVisible);
// }


// 	return (
// 		<figure>
//       <article style = {{ display: isVisible ? 'block' : 'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex quisquam est consectetur ipsa temporibus atque illum maiores illo et ut, ratione hic possimus culpa ipsam aperiam cum voluptas laudantium.</article>
// 			<img
// 				src={imgSrc}
// 				alt={`Representation of ${firstname}, a different horror movie film`}
// 			/>
      
// 			<figcaption>{firstname}</figcaption>
//       <button onClick={toggleVisibility}>
    
//       Synopsis
// </button> 


// 		</figure>
// 	);
// }



// export default Card;



import "../assets/styles/Card.css";
import { useState } from "react";
import "../App.css";

interface CardI {
	firstname: string;
	imgSrc: string;
}

function Card({ firstname, imgSrc }: CardI) {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<figure className="figure-container">
			<img
				src={imgSrc}
				alt={`Representation of ${firstname}, a different horror movie film`}
			/>
			<article className={`synopsis ${isVisible ? 'visible' : ''}`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex quisquam est consectetur ipsa temporibus atque illum maiores illo et ut, ratione hic possimus culpa ipsam aperiam cum voluptas laudantium.
			</article>
			<figcaption>{firstname}</figcaption>
			<button onClick={toggleVisibility}>
				Synopsis
			</button>
		</figure>
	);
}

export default Card;
