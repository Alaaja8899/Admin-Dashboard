import React from 'react'
import { BiDownload, BiEdit, BiTrash } from 'react-icons/bi';
import { Space, Table , Button, Popconfirm, message, Modal, Input } from 'antd';
import { useState,useEffect } from 'react';
import GredientBtn from '../components/GredientBtn';
import SingleUpload from '../components/SingleUpload';
import { ApiUrls } from '../config/config';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';







function Departments() {
    const [dummyJson,setDummy]=useState([])
    const [department,setDepartment]=useState('')
    const [modalOpen,setModalOpen] = useState(false)





    const columns = [
      {
        title: 'DepartName',
        dataIndex: 'departname',
        key: 'departname',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
                    <EditOutlined onClick={()=>{
                      setDepartment(record.departname)
                      setModalOpen(true)
                    }}/>
        
                    <Popconfirm okText='Yes' cancelText='No' title='Delete Department' description={`Are Sure to delete Department : ${record.departname}`}
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
    

          const handleOk = () => {
            setModalOpen(false);
            const departmentName =department ??=department='None'
            message.info(departmentName)
          };
          const handleCancel = () => {
            setModalOpen(false);
          };
      

    useEffect(() => {
      fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
          const transformedData = data.users.map(user => ({
            id: user.id,
            departname: user.company?.address.state || 'N/A',
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
            title="Update Department" open={modalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
              <Input placeholder='Department Name' onChange={(e)=> setDepartment(e.target.value)} value={department}/>
          </Modal>



      <Table columns={columns} dataSource={dummyJson}/>    

    </div>
  )
}

export default Departments
