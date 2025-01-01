import React, { useEffect, useState } from 'react'
import { Space, Table , Button, Modal, Popconfirm, message } from 'antd';
import { PiEyeClosed } from 'react-icons/pi';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Input} from 'antd';
import { FiDelete } from 'react-icons/fi';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const { Search } = Input;


function StudentsTable() {
  const [dummyJson,setDummy]=useState([])
  const [modalOpen,setModalOpen] = useState(false)





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
          <EditOutlined/>

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


    const showModal=()=>{
        setModalOpen(true)      
    }
    const hideModal=()=>{
        setModalOpen(false)      
    }
  

  const onSearch = (e) => {
    const text = e.target.value;

    console.log("Text : ",text)


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
          open={modalOpen}
          okText='Yes'
          cancelText='No'
          title="Update"    
      >



      </Modal>


    <Table columns={columns} dataSource={dummyJson}/>    
    </div>
  )
}

export default StudentsTable
