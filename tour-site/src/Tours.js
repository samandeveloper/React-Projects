import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

const tourMap = props.tours.map(tour =>{
  return(
  <Tour removeTour={props.removeTour} key={tour.id} name={tour.name} info={tour.info} image ={tour.image} price={tour.price} />
  )
})
// console.log(removeTour)
  return(
    <section>
      <div className='title'>
        <h2>Our Tours</h2>  
        <div className='underline'></div>
      </div>

      <div>{tourMap}</div>
      {/* <div> */}
        {/* {tours.map((tour) =>{
          return <Tour key={tour.id} name={tour.name} info={tour.info} image ={tour.image} price={tour.price} />
        })} */}
                {/* {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}  />;
        })} */}
      {/* </div> */}

    </section>

  )
};

export default Tours;
