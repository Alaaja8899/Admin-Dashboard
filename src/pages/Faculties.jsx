import React from 'react'
import { BiDownload, BiEdit, BiTrash } from 'react-icons/bi';
import { Space, Table , Button } from 'antd';
import { useState,useEffect } from 'react';
import GredientBtn from '../components/GredientBtn';
import SingleUpload from '../components/SingleUpload';
import { ApiUrls } from '../config/config';



const columns = [
  {
    title: 'FacultyName',
    dataIndex: 'facultyname',
    key: 'facultyname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
          <Button>
            <BiEdit/>
            </Button>
            <Button danger type='dashed'>
              <BiTrash />
            </Button>
      </Space>
    ),
  },
];




function Faculties() {
    const [dummyJson,setDummy]=useState([])
 
    

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.users.map(user => ({
          id: user.id,
          facultyname: user.company?.department || 'N/A',
          key: user.id,
        }));
        setDummy(transformedData);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);



  return (
    <div className='p-3'>


      <div className="btnsH p-6 flex justify-between">



      <div className="right flex gap-5">
      {/* <GredientBtn icon={<BiDownload/> text="Get as Excel"}/> */}
      <GredientBtn icon={<BiDownload/>} text={"Get as Excel"}/>
      <SingleUpload UploadUrl={ApiUrls.studentUpload}/>
      </div>
      </div>
      <hr />




    <Table columns={columns} dataSource={dummyJson}/>    
    </div>
  )
}

export default Faculties
