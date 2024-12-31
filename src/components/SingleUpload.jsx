import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload ,ConfigProvider, Space} from 'antd';
import { BsUpload } from 'react-icons/bs';
import { FaUpload } from 'react-icons/fa';

import { BiUpload } from 'react-icons/bi';
import GredientBtn from './GredientBtn';




function SingleUpload({UploadUrl}) {

    const props = {
        name: 'file',
        action: UploadUrl,
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
  return (
    <div>
         <Upload {...props}>
          <GredientBtn icon={<BiUpload/>} text={"Upload File"}/>
        </Upload>
    </div>
  )
}

export default SingleUpload
