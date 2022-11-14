import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//we must import the AppProvider in index.js where we import the App too
import {AppProvider} from "./context"


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
