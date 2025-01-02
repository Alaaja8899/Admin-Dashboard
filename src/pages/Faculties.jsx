import React from 'react'
import { BiDownload, BiEdit, BiTrash } from 'react-icons/bi';
import { Space, Table , Button, Popconfirm, message, Input, Modal } from 'antd';
import { useState,useEffect } from 'react';
import GredientBtn from '../components/GredientBtn';
import SingleUpload from '../components/SingleUpload';
import { ApiUrls } from '../config/config';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';







function Faculties() {
    const [dummyJson,setDummy]=useState([])
    const [modalOpen,setModalOpen] = useState(false)
    const [Faculty,setFaculty]=useState('')
 

    


    const handleOk = () => {
      setModalOpen(false);
      const faculty =Faculty ??=Faculty='None'
      message.info(faculty)
    };
    const handleCancel = () => {
      setModalOpen(false);
    };


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
    
                <EditOutlined onClick={()=>{
                  setFaculty(record.facultyname)
                  setModalOpen(true)
                }}/>
    
                <Popconfirm okText='Yes' cancelText='No' title='Delete Faculty' description={`Are Sure to Faculty : ${record.facultyname}`}
                onConfirm={()=>message.success("Successfully delted")}
                onCancel={()=>message.error("Canceled deltetion")}
                >
                  <Button type='dashed' danger>
                  <DeleteOutlined 
              />
                  </Button>
                </Popconfirm>
          </Space>
        ),
      },
    ];
    


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


      <Modal 
            className='flex flex-col gap-4'
            title="Update Faculty" open={modalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
              <Input placeholder='Faculty Name' onChange={(e)=> setFaculty(e.target.value)} value={Faculty}/>
      </Modal>




    <Table columns={columns} dataSource={dummyJson}/>    
    </div>
  )
}

export default Faculties
