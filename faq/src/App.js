import React, { useState } from 'react';
import data from './data';
import Question from './Question';   

function App() {
  const [questions, setQuestions] = useState(data)  //initial value is the data array
  const mapQuestions = questions.map((question) =>{
    return < Question key={question.id} {...question}/>
  })
  return(
    <main>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          <div>{mapQuestions}</div>
        </section>
      </div>
    </main>
  )
}

export default App;
