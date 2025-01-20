import React from 'react'
import Loading from '../components/Loading'
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> 
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const{id} = useParams()   //receive the id of each cocktail from API using the useParams

  //states
  const [loading, setLoading] = React.useState(false)
  const [cocktail,setCocktail] = React.useState(null)

  //fetch data
  React.useEffect(()=>{
    setLoading(true)
    //we use async for the fetch (old way) -- instead of const fetchDrinks = async() =>{
    async function getCocktail(){
      try{
        const response = await fetch (`${url}${id}`)   
        const data = await response.json()
        if(data.drinks){  //if data.drinks exists then show some items like ingredients
          const{
            strDrink:name, 
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory:category,
            strGlass:glass,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5} = data.drinks[0]

          //first 5 ingredients should be in the an array to show them together in UI  
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]
          //ES6
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          }
          setCocktail(newCocktail)
        }else{   //if data.drinks doesn't exists
          setCocktail([])
        }
      }catch(error){
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()   //call/invoke the function
  },[id])  //every time id changes

  if(loading){
    return <Loading />
  }
  if(!cocktail){  //if cocktail is null
    return <h2 className='section-title'>no cocktail to display</h2>
  }else{    //if cocktail is not null
    const{name,image,category,info,instructions,ingredients,glass} = cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}/>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span>{name}
            </p>
            <p>
              <span className='drink-data'>category :</span>{category}
            </p>
            <p>
              <span className='drink-data'>info :</span>{info}
            </p>
            <p>
              <span className='drink-data'>glass :</span>{glass}
            </p>
            <p>
              <span className='drink-data'>instructions :</span>{instructions}
            </p>
            {/* some of the items doesn't have all the 5 ingredients so we have to check them */}
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item,index)=>{
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}  
export default SingleCocktail
