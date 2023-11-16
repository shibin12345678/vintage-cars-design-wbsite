import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vehical from './components/Vehical'


const App = () => {
  return (
 <>
 <BrowserRouter>
  <Routes>
    <Route path='/vehicals' element={<Vehical/>}></Route>
  <Route path='/' element ={<Home/>}/>
   </Routes>
   </BrowserRouter>
  
  
   </>
  
  )
}

export default App
