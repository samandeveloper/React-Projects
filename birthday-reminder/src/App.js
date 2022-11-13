import React from 'react';
import data from './data';
import List from './List';

function App() {
  const [val , setVal] = React.useState(data)
  const handleClick = () =>{
    setVal([])
  }

  const dataList = val.map(item => {
    return (
      //key must be imported directly in the component
      <List key={item.id} image={item.image} name={item.name} age={item.age}/>
    )
  })
  return(
    <main>
      <section className='container'>
        <h3>{val.length} birthday today</h3>
        <div>{dataList}</div>
        <button onClick={handleClick}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
