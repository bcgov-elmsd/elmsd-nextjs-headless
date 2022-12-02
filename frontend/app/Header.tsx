import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <div className='text-center text-xl text-white p-5 bg-slate-700'>
        <Link href="/" className="p-1 m-2 bg-slate-100 text-black rounded-md">Home</Link>
        <Link href="/todos" className="p-1 m-2 bg-slate-100 text-black rounded-lg">TD</Link>
        </div>
       
    </header>
    
  )
}

export default Header