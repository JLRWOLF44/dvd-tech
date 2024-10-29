
import MyFooter from "./assets/components/MyFooter";
import "./App.css";
import Card from "./assets/components/Card.tsx"; 
import MyTitle from "./assets/components/MyHeader.tsx"
import "./assets/styles/Card.css"
// import './assets/components/arrow/cardFabrice.css' 
// import listMovies from './assets/components/arrow/baseMovies.tsx'
// import Card from './assets/components/arrow/cardFabrice.tsx'
// import '/src/assets/components/arrow/arrow.css



function App() {
	const cardsData = [
		{
			firstname: "Vendredi 13",
			imgSrc: "https://m.media-amazon.com/images/I/710oUcADbhL.jpg"
		},
		{
			firstname: "Les griffes de la Nuit",
			imgSrc: "https://www.ecranlarge.com/content/uploads/2020/03/les-griffes-de-la-nuit-affiche-francaise-1171041.png"
		},
		{
			firstname: "La Mouche",
			imgSrc: "https://fr.web.img6.acsta.net/medias/nmedia/18/65/16/97/18952914.jpg"
		},
		{
			firstname: "Silent Hill",
			imgSrc: "https://m.media-amazon.com/images/I/411jTQd6O0L._AC_UF1000,1000_QL80_.jpg"
		},
		{
			firstname: "Dead Silence",
			imgSrc: "https://musicart.xboxlive.com/7/81a21000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
		},
		{
			firstname: "Simetierre",
			imgSrc: "https://fr.web.img6.acsta.net/pictures/19/02/08/09/45/4614816.jpg"
		},
		{
			firstname: "Ça",
			imgSrc: "https://fr.web.img3.acsta.net/pictures/13/12/30/11/10/553375.jpg"
		},
		{
			firstname: "Alien",
			imgSrc: "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/60/18363837.jpg"
		},
		{
			firstname: "L'orphelinat",
			imgSrc: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/64/33/97/18888814.jpg"
		},
		{
			firstname: "Predator",
			imgSrc: "https://m.media-amazon.com/images/S/pv-target-images/5d2880ca87355b7352e5030c7fccb2ab7629238cd19e578dc0b1a496075c2617.png"
		},
		{
			firstname: "Amityville",
			imgSrc: "https://fr.web.img6.acsta.net/medias/nmedia/18/35/15/69/18365154.jpg"
		},
		{
			firstname: "Beetlejuice",
			imgSrc: "https://fr.web.img3.acsta.net/pictures/18/10/18/09/47/5083109.jpg"
		},
  
	]

	return (
		<>
			<MyTitle />
			<main>
				{cardsData.map((card, index) => (
					<Card key={index} firstname={card.firstname} imgSrc={card.imgSrc} />
				))}
			</main> 

      <MyFooter />
		</>
	);

}

// function App() {
 // const [next, setNext] = useState(0);

 // function rigthSlide() {
  //  setNext();
  // }

// //  return (
//     <>
//     <main>
//       <section className='slider'>
//         {
//       //    listMovies.filter((el) =>{
            
//           })

//           // listMovies.map((el) => {
//           //   return (
//           //     <Card key={el.id} CardMovies={ listMovies[el.id + next] }/>
//           //   )
//           // })
//         }
//       //  <button className='btn-arrow left-arrow' onClick={rigthSlide}>&lsaquo;</button>
//       //  <button className='btn-arrow right-arrow' onClick={rigthSlide}>&rsaquo;</button>

//       </section>
//     </main>
//     </>

//   )
// }




export default App;
