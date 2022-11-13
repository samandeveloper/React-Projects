
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight,  } from 'react-icons/fa'; 

const Review = (props) => {

  return(
    <article className='review'>
      <div className='img-container'>
        <img src={props.indexEach.image} alt={props.indexEach.name} className="person-img"/>
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{props.indexEach.name}</h4>
      <p className="job">{props.indexEach.job}</p>
      <p className="info">{props.indexEach.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={props.handleClickPrev }>< FaChevronLeft/></button>
        <button className="next-btn" onClick={props.handleClickNext}>< FaChevronRight/></button>
      </div>
      <button className="random-btn" onClick={props.handleClickSurprise}>Surprise Me</button>
    </article>
  )

};

export default Review;
