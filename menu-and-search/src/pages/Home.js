//in the homepage we have searchForm and cocktailList components
import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
