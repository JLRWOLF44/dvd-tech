import { useState } from 'react'
import './App.css'
import './assets/components/arrow/cardFabrice.css'

import Card from './assets/components/arrow/cardFabrice.tsx'
import LeftArrow from './assets/components/arrow/arrow-left.tsx'
import RightArrow from './assets/components/arrow/arrow-right.tsx'

const listMovies = [
  {
    id: 0,
    src: 'https://i.ebayimg.com/images/g/og8AAOSwTqFjyvwK/s-l1600.webp',
    alt: 'The last of us',
    synopsys: ''
  },
  
  {
    id: 1,
    src: 'https://www.photosmurales.fr/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
    alt: 'Star Wars I',
    synopsys: ''
  },

  {
    id: 2,
    src: 'https://i.ebayimg.com/images/g/gEoAAOSw84BfOWDp/s-l1600.webp',
    alt: 'Tenet',
    synopsys: ''
  },

  {
    id: 3,
    src: 'https://i.ebayimg.com/images/g/gEoAAOSw84BfOWDp/s-l1600.webp',
    alt: 'Tenet',
    synopsys: ''
  }
]

function App() {
  const [movie, setMovie] = useState(0);

  return (
    <>
    <main>
      <section className='slider'>
        {
          listMovies.map((el) => {
            return (
              <Card key={el.id} CardMovies={ listMovies[el.id] }/>
            )
          })
        }
        <LeftArrow />
        <RightArrow />
      </section>
    </main>
    </>

  )
}

export default App
