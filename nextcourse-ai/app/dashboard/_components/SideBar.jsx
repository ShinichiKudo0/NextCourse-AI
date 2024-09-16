import Image from 'next/image'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";

function SideBar() {
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<IoHome />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon:<MdOutlineTravelExplore />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Upgrade',
            icon:<GrUpgrade />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Logout',
            icon:<IoLogOutOutline />,
            path:'/dashboard'
        }
    ]
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo2.svg'} width={80} height={100} />
        <hr className='my-5' />

        <ul>
            {Menu.map((item,index)=>(
                <div>
                    <div>
                        {item.icon}
                    </div>
                </div>
            ))}
        </ul>

    </div>
  )
}

export default SideBar