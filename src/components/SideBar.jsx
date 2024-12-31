import { Menu } from 'antd'
import React from 'react'
import { FaBuilding, FaSchool, FaUsers } from 'react-icons/fa'
import { FcDepartment } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import logoIMG from '../assets/logo.png'
import { useGlobalContext } from '../context/GlobalContext'
import { BiUpload } from 'react-icons/bi'
function SideBar() {
    const navigate = useNavigate()
    const {setPathUrl,Menue,setMenue} = useGlobalContext()
  return (
    <div   className={`${
        Menue ? 'flex ' : 'hidden'
      } md:flex  flex-col items-center pt-10 border-r-2 transition-opacity duration-500 max-h-screen sticky top-0`}
      
      >
        
        <div className="logo">
            <img
            className='w-[100px]'
            src={logoIMG} />
        </div>

        <Menu className='flex h-screen flex-col p-6 gap-5 '
        onClick={(key)=>{
            setMenue(false)
            navigate(key.key) 
            if(key.key == '/'){
                    setPathUrl('/upload')
            }else{
                setPathUrl(key.key)
            }
        }}
        items={[
            {label:'Upload',key:'/',icon:<BiUpload size={22}/>},
            {label:'Faculties',key:'/faculties',icon:<FaBuilding size={22}/> },
            {label:'Departments',key:'/departments',icon:<FcDepartment size={22}/>},
            {label:'Students' ,key:'/students', icon:<FaUsers size={22}/>},
        ]}>
        </Menu>

    </div>
  )
}

export default SideBar
