import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CategorySelection from './pages/CategorySelection';
import Performance from './pages/Performance';
import Budgeting from './pages/Budgeting';
import BusinessDashboard from './pages/BusinessDashboard';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category' element={<CategorySelection />} />
          <Route path='/performance' element={<Performance />} />
          <Route path='/budget' element={<Budgeting />} />
          <Route path='/business-dashboard' element={<BusinessDashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
