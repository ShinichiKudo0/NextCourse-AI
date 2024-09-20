import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-6 shadow-sm'>
        <Image src={'logo-3.svg'} width={70} height={40} />
        <UserButton/>
    </div>
  )
}

export default Header