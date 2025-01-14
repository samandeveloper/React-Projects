import React, { useState } from 'react';
import data from './data';

function App() {
  //state
  const[text,setText] = useState([])   //it's empty array because we have no quote at first
  const[count,setCount] = useState(0)  //begins the count from 0
  let amount =count
 
  const handleClick = (e) =>{
    e.preventDefault()
    if(count>9){
      amount = 9
    }
    if(count <=0){
      amount = 1
    }
    let textCopy =  data.slice(0,amount)
    setText(textCopy)
  }
  const handleChange =(e)=>{
    e.preventDefault()
    setCount(e.target.value)
  }
  
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleClick}>
        <label htmlFor="amount">paragraphs:</label>
        <input type='number' name="amount" id="amount" value={count} onChange={handleChange}/>
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item,i)=>{
          return(
            <p key={i}>{item}</p>
          )
        })}
      </article>
    </section>
    )
}

export default App;
