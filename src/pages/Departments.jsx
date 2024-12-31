import React from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Space, Table , Button } from 'antd';
import { useState,useEffect } from 'react';



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




function Departments() {
    const [dummyJson,setDummy]=useState([])
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
    <div>

      <Table columns={columns} dataSource={dummyJson}/>    

    </div>
  )
}

export default Departments
