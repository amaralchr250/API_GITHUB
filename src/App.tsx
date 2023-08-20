import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import { Outlet } from "react-router-dom"

import classes from "./App.module.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={classes.app}>
       <h1>Buscador de Github</h1>
      </div>
    <Outlet />
  
    </>
  )
}

export default App;