import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { useGlobalContext } from '../context/GlobalContext'
import { Dropdown } from 'antd'
import { BiLogOut } from 'react-icons/bi'

function Header() {
    const {Menue,setMenue}=useGlobalContext()
    const items =  [
        {
            key:'1',
            label:'myAccount',
            icon: <RxAvatar size={22} color='gray'/>
        },
        {
            key:'2',
            label:'SignOut',
            icon: <BiLogOut size={22} />,
            danger:true
        },
    ]
  return (
    <header className="flex w-full bg-sky-400 p-6 justify-between h-[83px] cursor-pointer sticky top-0 z-10">
        <AiOutlineMenuFold onClick={()=> setMenue(!Menue)} size={22}/>

        <Dropdown menu={{items}}>
            <a 
            className="profile flex border rounded items-center justify-center gap-2 p-2 cursor-pointer"
            href="#" onClick={(e)=>(e.preventDefault())}>
            <RxAvatar size={22}/>
            Profile
            </a>
        </Dropdown>

    </header>
  )
}

export default Header
