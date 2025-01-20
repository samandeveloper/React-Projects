import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'    //npm install react-router-dom
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import Navbar component
import Navbar from './components/Navbar'


function App() {
  //we can use the router in the index.js file too
  return (
    <Router>
      {/* because navbar is always on the top in all the page */}
      <Navbar/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route exact path="/cocktail/:id"><SingleCocktail /></Route>
          {/* error page (when the url address is not right) */}
          <Route exact path="*"><Error /></Route>   
        </Switch>
    </Router>
  )
}

export default App
