import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  //states
  const [color,setColor] = useState('');  //what user type in the input--empty string
  const [error, setError] = useState(false);  //when user doesn't write the right hex number, the input box will be ready means error and do nothing
  const [list,setList] = useState(new Values('#f15025').all(10))


  const handleSubmit = (e) =>{
    e.preventDefault()
    try{
      const colors = new Values(color).all(10)  //weight=10 means the gaps between percentages are 10
      console.log(colors)   //we receive the 20 shadows of the color
      setList(colors)  
    }catch(error){
      setError(true)
      console.log(error)
    }
  }

  return(
  <div>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='#f15025' value={color} onChange={(e)=>setColor(e.target.value)} style={{border: error ? "1px solid red" : "1px solid white"}}/>
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((value,index)=>{
        return(
          <SingleColor key={index} {...value} index={index} hexColor={value.hex}/>
        )
      })}
    </section>
  </div>
  )
}

export default App
