import React, { useState } from 'react'
//markdown package create content for various platforms including blogs, web forums, chat apps, WYSIWYG editors, and much more.
import ReactMarkdown from 'react-markdown'

function App() {
  //state
  const [markdown,setMarkdown] = useState('# markdown preview')  //left side of page--the space between # and markdown preview is important 

  const handleChange = (e)=>{
    return setMarkdown(e.target.value)
  }
  return (
    <main>
      <section className='markdown'>
        <textarea className="input" value={markdown} onChange={handleChange}></textarea>
        <article className="result">
          {/* <h1>markdown preview</h1> */}
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>     
        </article>
      </section>
    </main>
  )
}

export default App
