import React from 'react';
import { Container } from '../Container';
import Image from 'next/image';
import logo from '/public/logo-purple.svg';
import { FooterColumn } from './FooterColumn';
import { footerLinks } from '@/constants';

export const Footer = () => {
  return (
    <footer className='flex-col w-full gap-10 bg-blue-300/25 py-5'>
      <Container className='flex flex-col gap-10'>
        <div className='flex items-start flex-col'>
          <Image src={logo}
                  width={115}
                  height={38}
                  alt='Flexible Logo footetr'
          />

          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Flexible is the World&apos;s leadingcommmunity for creatives to share, grow, and get hired.
          </p>
        </div>

        <div className='flex-1 flex-wrap flex gap-3'>
          <FooterColumn title={footerLinks[0].title}
                        links={footerLinks[0].links} 
          />

          <div className='flex-1 flex  flex-col gap-x-4'>
            <FooterColumn title={footerLinks[1].title}
                          links={footerLinks[1].links} 
            />

            <FooterColumn title={footerLinks[2].title}
                          links={footerLinks[2].links} 
            />
          </div>

          <FooterColumn title={footerLinks[3].title}
                          links={footerLinks[3].links} 
          />

          <div className='flex-1 flex  flex-col gap-x-4'>
            <FooterColumn title={footerLinks[4].title}
                          links={footerLinks[4].links} 
            />

            <FooterColumn title={footerLinks[5].title}
                          links={footerLinks[5].links} 
            />
          </div>

          <FooterColumn title={footerLinks[6].title}
                          links={footerLinks[6].links} 
          />
        </div>
      </Container>
    </footer>
  )
}
