import { Button } from 'antd'
import React from 'react'
import { BiDownload, BiPlus } from 'react-icons/bi'
import AddStudent from '../components/AddStudent'
import SingleUpload from '../components/SingleUpload'
import { ApiUrls } from '../config/config'
import StudentsTable from '../components/StudentsTable'
import GredientBtn from '../components/GredientBtn'

function Students() {
  return (
    <div>
      <div className="btnsH p-6 flex justify-between">

        <AddStudent />


      <div className="right flex gap-5">
        {/* <GredientBtn icon={<BiDownload/> text="Get as Excel"}/> */}
        <GredientBtn icon={<BiDownload/>} text={"Get as Excel"}/>
        <SingleUpload UploadUrl={ApiUrls.studentUpload}/>
      </div>
      </div>
      <hr />

      <StudentsTable/>

    </div>
  )
}

export default Students
