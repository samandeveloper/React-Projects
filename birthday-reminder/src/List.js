import React from 'react';


const List = (props) => {
  return (
    //we can write the map here instead of App.js
    <>
        <div className='person'>
          <img src={`${props.image}`}/>
            <div>
              <h4>{props.name}</h4>
              <p>{props.age} years</p>
              
            </div>
      </div>
    </>
  );
};

export default List;


