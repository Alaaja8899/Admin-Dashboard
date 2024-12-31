import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { BiPlus } from 'react-icons/bi';
import GredientBtn from './GredientBtn';


function AddStudent() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
    <div>
      <div className="btnadd" onClick={showModal}>
      <GredientBtn icon={<BiPlus/>} text={"Add Student"}/>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default AddStudent
