import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Input, message, Modal, Select } from 'antd';
import { BiPlus } from 'react-icons/bi';
import GredientBtn from './GredientBtn';


function AddStudent() {
  const [Faculties,setFaculties]=useState([])
  const [departments,setDepartments]=useState([])
  const [stdName,setStdName]=useState('')
  const [id,setId]=useState()
  const [Faculty,setFaculty]=useState('')
  const [department,setDepartment]=useState('')
  



    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);

      if(!stdName || !id || !Faculty || !department){
        message.error("All Fileds Not completed!")
        return
      }

      message.success("Student data recieved !")

      console.log("Student saving data : ",{name:stdName,id:id,faculty:Faculty,department:department})
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.users.map(user => ({

          value: user.company?.address?.state || 'N/A',
          label: user.company?.address?.state || 'N/A',
        }));
        setDepartments(transformedData)
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        const transformedData = data.users.map(user => ({
          value: user.company?.department || 'N/A',
          label: user.company?.department || 'N/A',
          key:Math.random(1,100)

        }));
        setFaculties(transformedData)
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);


    return (
    <div>
      <div className="btnadd" onClick={showModal}>
      <GredientBtn icon={<BiPlus/>} text={"Add Student"}/>
      </div>
      <Modal 
      className='flex flex-col gap-4'
      title="Add Student" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
        <Input placeholder='Student Name' onChange={(e)=> setStdName(e.target.value)} />
        <br />
        <Input placeholder='ID' maxLength={6}  onChange={(e)=> setId(e.target.value)} />
        <br />
        <Select className='w-full' onChange={(e)=> setFaculty(e)}
        defaultValue={'Select Faculty'}
        options={Faculties}
        >

        </Select>
        <br />
        <Select className='w-full' onChange={(e)=> setDepartment(e)}
        defaultValue={'Select Department'}
        options={departments}
        >

        </Select>
      </Modal>
    </div>
  )
}

export default AddStudent
