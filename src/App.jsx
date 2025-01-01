import React from 'react'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'
import Header from './components/Header'

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>

      <div className="contnt flex">
        
      <SideBar/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App
