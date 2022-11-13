//the id of this API is not working so the "Not Interested" button is not working  

import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// import {useNanoid} from 'use-nanoid'
// const Idd = useNanoid()
// console.log(Idd)
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'  //this is an API that we created
function App() {
  //we have two states one for loading and one for tours
  const [loading, setLoading] = useState(true)  //true because we always want to load the page at first before data comes from API to UI
  const [tours,setTours] = useState([]);

  // const fetchTours = async()=>{
  //   setLoading(true)   //this line is to meke sure that Loading is true by default
  //     const response = await fetch(url)
  //     const tours = response.json()
  //     console.log(tours) 
  // }

  //instead of above function we can use try and catch:
  const fetchTours = async()=>{
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()  //this must be go to the tours state
      setLoading(false)
      setTours(tours)
      console.log(tours)
    }catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  //we must use useEffect since we want to use API and we have two states to sync between
  useEffect(() => {
    fetchTours();  //we must use ()
  },[])  //receive the API data one time

  //we can have two retuens one for loading and one for tours
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0){
    return(
      <main>
          <div className='title'>
            <h2>No Tours Left</h2>  
            <button className='btn' onClick={() => fetchTours()}>Refresh</button> 
          </div>
      </main>
    )
  }

  //remove tour should be define here since we need to update the tours state

  const removeTour = (id) => {
    console.log(id)
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  //if loading is not true (false) and we receive API data
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  ) 
}

export default App
