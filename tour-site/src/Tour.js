import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore,setReadMore] = useState(false)
  return(
  
    <article className='single-tour'>
      <img src={props.image}/>
      <footer>
        <div className='tour-info'>
          <h4>{props.name}</h4>
          <h4 className='tour-price'>${props.price}</h4>
        </div>
          {/* <p>{props.info}<button>Read More</button></p> */}
          <p>{readMore ? props.info : `${props.info.substring(0,200)}...`}<button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" : " read more"}</button></p>
          {/* this is a remove button */}
          <button className="delete-btn" onClick={() => props.removeTour(props.id)}>Not Interested</button>   
        
      </footer>
    </article>
   
  )
};

export default Tour;
