'use client'

import Link from 'next/link'
import React from 'react'

const CustomLink = ({ href, title, className }: Readonly<CustomLinkProps>) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className="h-[1px] inline-block w-0 bg-black dark:bg-white
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
            ">
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between' >
        <nav>
            <CustomLink href="/" title='Accueil' className='mr-4' />
            <CustomLink href="/about" title='À propos' className='mx-4' />
            <CustomLink href="/projects" title='Projets' className='mx-4' />
            <CustomLink href="/articles" title='Articles' className='ml-4' />
        </nav>
    </header>
  )
}

export default NavBar