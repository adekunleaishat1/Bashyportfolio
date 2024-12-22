import React from 'react'
import LandingPgae from './LandingPgae'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPgae/>}/>
      </Routes>
    </div>
  )
}

export default App