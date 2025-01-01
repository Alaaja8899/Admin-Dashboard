import React, { useEffect, useState } from 'react'
import { Space, Table , Button, Modal, Popconfirm, message, Select } from 'antd';
import { PiEyeClosed } from 'react-icons/pi';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Input} from 'antd';
import { FiDelete } from 'react-icons/fi';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Search } = Input;


function StudentsTable() {
  const [dummyJson,setDummy]=useState([])
  const [modalOpen,setModalOpen] = useState(false)
  const [Faculties,setFaculties]=useState([])
  const [departments,setDepartments]=useState([])
  
  const [stdName,setStdName]=useState('')
  const [id,setId]=useState()
  const [Faculty,setFaculty]=useState('')
  const [department,setDepartment]=useState('')





  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'DepartmentId',
      dataIndex: 'departmentid',
      key: 'departmentid',
    },
    {
      title: 'FacultyId',
      dataIndex: 'facultyid',
      key: 'facultyid',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" className='cursor-pointer'>
          <EditOutlined onClick={()=>{
            setStdName(record.name)
            setDepartment(record.departmentid)
            setId(record.id)
            setFaculty(record.facultyid)
            setModalOpen(true)
          }}/>

            <Popconfirm okText='Yes' cancelText='No' title='Delete Student' description={`Are Sure to delete Student : ${record.name}`}
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
  const data = [
    {
      key:'1',
      name:'Abdirahman',
      id:135420,
      departmentid:"Galaal",
      facultyid:"CM3B"
    }
  ];


  

  const onSearch = (e) => {
    const text = e.target.value;

    console.log("Text : ",text)


  };

      const handleOk = () => {
        setModalOpen(false);
  
        if(!stdName || !id || !Faculty || !department){
          message.error("All Fileds Not completed!")
          return
        }
  
        message.success("Student data recieved !")
  
        console.log("Student saving data : ",{name:stdName,id:id,faculty:Faculty,department:department})
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
          name: user.firstName,
          departmentid: user.company?.department || 'N/A',
          facultyid: user.company?.address?.state || 'N/A',
          key: user.id,
        }));
        setDummy(transformedData);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  useEffect(()=>{
    console.log("After filteration:",dummyJson)
  },[dummyJson])



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
    <div className='p-3'>
       <Search
      placeholder="Id ,Name ..."
      allowClear
      enterButton="Search"
      onChange={onSearch}
      size="large"
    />


      <Modal 
            className='flex flex-col gap-4'
            title="UpdateStudent" open={modalOpen} onOk={handleOk} onCancel={handleCancel} okText="Save">
              <Input placeholder='Student Name' onChange={(e)=> setStdName(e.target.value)} value={stdName} />
              <br />
              <Input placeholder='ID' maxLength={6}  onChange={(e)=> setId(e.target.value)} value={id} />
              <br />
              <Select className='w-full' onChange={(e)=> setFaculty(e)}
              defaultValue={Faculty ? Faculty:"Select Faculty"}
              options={Faculties}
              >

              </Select>
              <br />
              <Select className='w-full' onChange={(e)=> setDepartment(e)}
              defaultValue={department ? department :"Select Department"}
              options={departments}
              >

        </Select>
      </Modal>


    <Table  columns={columns} dataSource={dummyJson}/>    
    </div>
  )
}

export default StudentsTable
