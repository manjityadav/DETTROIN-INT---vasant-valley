import React from 'react'
import  {Routes,BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Header from './components/Header.jsx'


function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
