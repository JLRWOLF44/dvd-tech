import Card from "../src/components/Card";
import Header from "../src/components/Header";

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
}




export default App;
