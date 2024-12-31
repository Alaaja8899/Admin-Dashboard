import React, { useEffect, useState } from 'react'
import { Space, Table, Tag , Button } from 'antd';
import { PiEyeClosed } from 'react-icons/pi';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Input} from 'antd';
import { FiDelete } from 'react-icons/fi';
const { Search } = Input;

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
        <Space size="middle">
            <Button>
              <BiEdit/>
              </Button>
              <Button >
                <BiTrash />
              </Button>
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
function StudentsTable() {
  const [dummyJson,setDummy]=useState([])

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
    <Table columns={columns} dataSource={dummyJson}/>    
    </div>
  )
}

export default StudentsTable
