
// import { useState } from 'react'
import MyTitles from "./assets/components/MyHeader";
import MyFooter from "./assets/components/MyFooter";
import NavBar from "./assets/components/NavBar";
import "./App.css";
import Card from "../src/components/Card"; 
import Header from "../src/components/Header";
import { useState } from 'react'
import './App.css'


function App() {
  return (
    <>
      <MyTitles />

      <MyFooter />
    </>
  );
}



// import './assets/components/arrow/cardFabrice.css' 
// import listMovies from './assets/components/arrow/baseMovies.tsx'
// import Card from './assets/components/arrow/cardFabrice.tsx'
// import '/src/assets/components/arrow/arrow.css'


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
			firstname: "L'orphelinat",
			imgSrc: "https://fr.web.img3.acsta.net/c_310_420/medias/nmedia/18/64/33/97/18888814.jpg"
		}
	];

	return (
		<>
			<Header />
			<main>
				{cardsData.map((card, index) => (
					<Card key={index} firstname={card.firstname} imgSrc={card.imgSrc} />
				))}
			</main>
		</>
	);



// function App() {
 // const [next, setNext] = useState(0);

 // function rigthSlide() {
  //  setNext();
  }

//  return (
    <>
    <main>
      <section className='slider'>
        {
      //    listMovies.filter((el) =>{
            
          })

          // listMovies.map((el) => {
          //   return (
          //     <Card key={el.id} CardMovies={ listMovies[el.id + next] }/>
          //   )
          // })
        }
      //  <button className='btn-arrow left-arrow' onClick={rigthSlide}>&lsaquo;</button>
      //  <button className='btn-arrow right-arrow' onClick={rigthSlide}>&rsaquo;</button>

      </section>
    </main>
    </>

  )
}




export default App;
