import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between p-1 pl-8 pr-9 shadow-md'>
        <Image src={'/logo2.svg'} width={90} height={10} alt="Logo" />
        <Button className='ml-auto'>Get Started</Button>
    </div>
  )
}

export default Header
