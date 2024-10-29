import { useState } from 'react'
import './App.css'
import './assets/components/arrow/cardFabrice.css'

import listMovies from './assets/components/arrow/baseMovies.tsx'
import Card from './assets/components/arrow/cardFabrice.tsx'
import '/src/assets/components/arrow/arrow.css'

function App() {
  const [next, setNext] = useState(0);

  function rigthSlide() {
    setNext();
  }

  return (
    <>
    <main>
      <section className='slider'>
        {
          listMovies.filter((el) =>{
            
          })

          // listMovies.map((el) => {
          //   return (
          //     <Card key={el.id} CardMovies={ listMovies[el.id + next] }/>
          //   )
          // })
        }
        <button className='btn-arrow left-arrow' onClick={rigthSlide}>&lsaquo;</button>
        <button className='btn-arrow right-arrow' onClick={rigthSlide}>&rsaquo;</button>

      </section>
    </main>
    </>

  )
}

export default App
