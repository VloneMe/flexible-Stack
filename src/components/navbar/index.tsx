import Image from 'next/image';
import Link from 'next/link';
import logo from "/public/logo.svg";
import { Container } from '../Container';
import { NavLinks } from '@/constants';
import { AuthProviders } from '../AuthProviders';
import { getCurrentUser } from '../../../lib/session';

export const Navbar = async () => {
  
  const session = await getCurrentUser();

  return (
    <nav className='flex h-[60px] w-full border-b'>
      <Container className="flex">
        <div className='flex w-full space-x-14 items-center'>
          <Link href="/">
            <Image src={logo}
                    width={115}
                    height={43}
                    alt="Flexible logo"
            />
          </Link>

          <ul className='lg:flex hidden space-x-5 text-base'>
            {NavLinks.map((link) => (
              <Link href={link.href} 
                    key={link.key}
                    className=''
              >
                  {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className='flex justify-center items-center gap-5 text-base'>
          {session?.user ? (
            <>
              {session?.user?.image && (
                <Image src={session.user.image}
                        width={40}
                        height={40}
                        alt={session.user.name}
                        className='rounded-full'
                /> 
              )}

              <Link href='/create-project'>
                ShareWork
              </Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </Container>
    </nav>
  ) 
}
