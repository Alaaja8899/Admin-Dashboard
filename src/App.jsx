import React from 'react'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='flex'>
      <SideBar/>
      <Dashboard/>
    </div>
  )
}

export default App
