import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import uploadIMG from '../assets/upload.svg'
import { message, Upload } from 'antd';
const { Dragger } = Upload;

function UploadFile() {

  const props = {
    name: 'file',
    accept:'.txt,.csv,.xltm,.xltx ,.xlsm,.xls,.xlsx',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <div className='p-6 space-y-5'>

  <Dragger {...props} >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Upload an Excel file containing students' data Do not spam uploading multiple files only once at a time 
       </p>
  </Dragger>

      <div className="upload-img flex items-center justify-center">
      <img 
    className='md:w-[300px]'
    src={uploadIMG} alt="upload undraw image" />
      </div>
          
    </div>
  )
}

export default UploadFile
