import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  //bring the cocktails and loading states from the context file 
  const {cocktails, loading} = useGlobalContext()   
  
  //if loading is true
  if(loading){  
    return <Loading />
  }
  //if we search something and it wasn't on the list then a message will generate--if the loading is false this one happens
  if(cocktails.length < 1){  //no cocktail items exists
    return(
    <h2 className='section-title'>no cocktails matched your search criteria</h2>
    )
  }
  
  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=>{
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
