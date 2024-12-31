import React from 'react'
import { createStyles } from 'antd-style';
import { BiUpload } from 'react-icons/bi';
import {ConfigProvider, Space,Button} from 'antd';


const useStyle = createStyles(({ prefixCls, css }) => ({
    linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(135deg, #6253e1, #04befe);
          position: absolute;
          inset: -1px;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    `,
  }));
  

function GredientBtn({text,icon}) {
    const { styles } = useStyle();

  return (
    <div>
         <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <Button type="primary" size="large" icon={icon}>
          {text}
        </Button>
      </Space>
    </ConfigProvider>
        
    </div>
  )
}

export default GredientBtn
