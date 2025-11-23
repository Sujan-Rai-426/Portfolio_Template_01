import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { InViewAnimationProvider } from './context/InViewAnimation'

function App() {


  return (
    <InViewAnimationProvider>
      <Home />
    </InViewAnimationProvider>
  )
}

export default App