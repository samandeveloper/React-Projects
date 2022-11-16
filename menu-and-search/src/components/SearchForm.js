import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // we import the useGlobalContext above, now we have to destructure it from the context file to bring the states that we want
  const {setSearchTerm} = useGlobalContext()   //we don't need the searchTerm state, we just need the setSearchTerm
  //uncontrolled input -- use useRef --let DOM handle the component
  const searchValue = React.useRef('')   //empty string

  //fetching data--we use current.focus to appear the input box in the search field with the enter or click
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])  //we call it when the components render

  //to prevent refreshing the page if the user pushes the enter button 
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <lable htmlFor="name">Search your favorite cocktail</lable>
          <input type='text' id='name' ref={searchValue} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
