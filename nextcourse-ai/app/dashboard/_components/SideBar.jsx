"use client"
import Image from 'next/image'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GrUpgrade } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

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
            path:'/dashboard/explore'
        },
        {
            id:1,
            name:'Upgrade',
            icon:<GrUpgrade />,
            path:'/dashboard/upgrade'
        },
        {
            id:1,
            name:'Logout',
            icon:<IoLogOutOutline />,
            path:'/dashboard/logout'
        }
    ]
    const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/logo2.svg'} width={80} height={100} />
        <hr className='my-5' />

        <ul>
            {Menu.map((item,index)=>(
                <Link href={item.path}>
                    <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3
                    ${item.path==path&&'bg-gray-100 text-black'}`}>
                        <div className='text-2xl'>
                            {item.icon}
                        </div>
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ))}
        </ul>

        <div className='absolute bottom-10 w-[80%]'>
            <Progress value={33} />
            <h2 className='text-sm my-2'>3 out of 5 Course created</h2>
            <h2 className='text-xs text-slate-200'>Upgrade your plan for unlimited course generate</h2>
        </div>

    </div>
  )
}

export default SideBar