//Generating articles
import React from 'react'
import moment from 'moment'  //memnt is one of the ready packages in node-module so it's not an npm package
//there is an npm package with this name too,but this is not that


const Article = ({title,date,length,snippet}) => {

  // console.log(date)
  // console.log(moment(date).format('dddd Do, yyyy'))

  return(
      <article className='post'>
        <h2>{title}</h2>

        <div className='post-info'>
          {/* <span>{date}</span> */}
          <span>{moment(date).format('dddd Do, yyyy')}</span> 
          <span>{length} min read</span>
        </div>

        <p>{snippet}</p>
      </article>
   
  )
}

export default Article
