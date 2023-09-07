import Link from 'next/link'
import React from 'react'

interface footerProps {
    title: string,
    links: Array<string>

}

export const FooterColumn = ({ title, links }: footerProps) => {
  return (
    <div className='flex-1 flex flex-col gap-4 text-sm min-w-max'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal text-sm'>
            {links.map((link) => (
                <Link href='/' key={link}>
                    {link}
                </Link>
            ))}
        </ul>
    </div>
  )
}
