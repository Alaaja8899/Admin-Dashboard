import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Faculties from '../pages/Faculties'
import Departments from '../pages/Departments'
import Students from '../pages/Students'
import Header from './Header'
import { useGlobalContext } from '../context/GlobalContext'
import UploadFile from '../pages/Upload'

function Dashboard() {
    const params = useParams()
    const {PathUrl} = useGlobalContext();

    console.log('Params' , params)
  return (
    <div className='w-full'>
        <br />
        <p className="text-gray-400 p-6">
            {`Dashboard  ${PathUrl}`}
        </p>
        <hr />

        <Routes>
            <Route path='/' element={<UploadFile/>} />
            <Route path='/faculties' element={<Faculties/>} />
            <Route path='/departments' element={<Departments/>} />
            <Route path='/students' element={<Students/>} />
        </Routes>
    </div>
  )
}

export default Dashboard
