import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// below is the cocktail db API and it doesn't have the API key--it's a search API
//go to https://www.thecocktaildb.com/api.php  link--at the end of the url below, is margarita but we are not going to add it since users should add anything that they want in the search field
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()   //define/create the useContext

const AppProvider = ({ children }) => {
  //states
  const[loading,setLoading] = useState(true)
  const[searchTerm,setSearchTerm] = useState('a')  //by default we should receive some of the cocktails list that has 'a' (we can use anything instead of a )-set to 'a' as an example to show some cocktails when the app loads
  const[cocktails,setCocktails] = useState([])  //by default an emty value--no cocktail items

  //fetch function for API
  const fetchDrinks = useCallback(async() =>{   //useCallback to say only use create this function again if search changes if not don't create it from scratch
    setLoading(true) 
    try{
      //we grab the url and then searchTerm which is by default shows cocktails contains a 
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      //so we should write the if statement so if we have the drink array or it's null (when type gibrish)
      const {drinks} = data  //let data ={drinks: }  //grab me the drinks from data
      if(drinks){  //if drinks is not null iterate over them
        const newCocktails = drinks.map((item) =>{
          const {idDrink, strDrink, strDrinkThumb,strAlcoholic, strGlass} = item   
            //choose a proper name for object variables that we want to return
            return{
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass:strGlass
          }
        })
        setCocktails(newCocktails)   //we have to set the cocktails
      }else{  //if drink is null there shouldn't be any cocktail list, it should be an emty array
        setCocktails([])   //show an emty list of cocktails
      }
      setLoading(false)
    }catch (error){
      setLoading(false)
    }
  })
  
  //call the fetchDrinks function every time searchTerm state call
  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])

  return <AppContext.Provider value={{
    loading,
    cocktails,
    setSearchTerm}} >{children}</AppContext.Provider>
}
//grab the states in the useGlobalContext 
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }  
