import React from 'react';
import Review from './Review';
import reviews from './data';
import { FaGithubSquare } from "react-icons/fa";

function App() {
  const [index,setIndex] = React.useState(0)  //index 0-3
  const indexEach = reviews[index]

  const handleClickNext = () =>{
    setIndex(index === reviews.length-1 ? 0 : index+1)
  }

  const handleClickPrev = () =>{
    setIndex(index === 0 ? reviews.length-1 : index-1)
  }

  const handleClickSurprise = () =>{
    const randomNumber = Math.floor(Math.random()*4+1) 
    console.log(randomNumber)
    setIndex(randomNumber-1)
  }

  return(
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review indexEach={indexEach} handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} handleClickSurprise={handleClickSurprise}/>
      </section>
    </main>
  )

}

export default App;
