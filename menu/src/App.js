import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  const[menuItem, setMenuItem] = useState(items) 
  const[categories, setCategories] = useState(allCategories)
  const itemsMap = menuItem.map((item) => {
    return(
      <Menu key={item.id} categories={categories} menuItem={menuItem} id={item.id} img={item.img} title={item.title} desc={item.desc} price={item.price} category={item.category}/>
    )
  })
  
  //categories
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <div className='section-center'>{itemsMap}</div>
      </section>
    </main>
  )
}

export default App;
