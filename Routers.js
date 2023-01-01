import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Jobpost from './Pages/Jobpost'
import Jobseacrch from './Pages/jobsearch'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/search-job' element={<Jobseacrch/>} />
        <Route path='/post-job' element={<Jobpost/>} />
    </Routes>
  )
}

export default Routers