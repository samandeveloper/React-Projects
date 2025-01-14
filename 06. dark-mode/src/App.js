import React, { useState, useEffect } from 'react'
import data from './data'  //articles array of objects
import Article from './Article'

function App() {
  //states
  const[toggle,setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return(
    <main className={toggle ? 'background-black' : 'background-white'}>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={handleClick}>toggle</button>
        </div>
      </nav>
     
      <section className='articles'>
        {data.map((article,index)=>{
          return <Article key={index} {...article}/>
        })}
      </section>

    </main>
  )
}

export default App
