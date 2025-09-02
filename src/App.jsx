import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userContextProvider from './context/userContextProvider'
function App() {

  return (
    <userContextProvider>
      <h1>React is imp</h1>
    </userContextProvider>
  )
}

export default App
