import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const dimention = 24;
const styles = {
  footerButton: 'opacity-20',
  selectedFooterButton: '',
}

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full bg-normalBlueBg rounded-b-2xl py-4 grid grid-cols-5'>

      <Link
        href='/'
      >
        <a className='flex justify-center items-center'>
          <Image src='/icons/tokens.svg' alt='tokens' width={dimention} height={dimention} className={router.pathname === '/' ? styles.selectedFooterButton : styles.footerButton} />
        </a>
      </Link>


      <Link
        href='/assets'
      >
        <a className='flex justify-center items-center'>
          <Image src='/icons/assets.svg' alt='assets' width={dimention} height={dimention} className={router.pathname === '/assets' ? styles.selectedFooterButton : styles.footerButton} />
        </a>
      </Link>


      <Link
        href='/exchange'
      >
        <a className='flex justify-center items-center'>
          <Image src='/icons/exchange.svg' alt='exchange' width={dimention} height={dimention} className={router.pathname === '/exchange' ? styles.selectedFooterButton : styles.footerButton} />
        </a>
      </Link>


      <Link
        href='/activity'
      >
        <a className='flex justify-center items-center'>
          <Image src='/icons/activity.svg' alt='activity' width={dimention} height={dimention} className={router.pathname === '/activity' ? styles.selectedFooterButton : styles.footerButton} />
        </a>
      </Link>


      <Link
        href='/settings'
      >
        <a className='flex justify-center items-center'>
          <Image src='/icons/settings.svg' alt='settings' width={dimention} height={dimention} className={router.pathname === '/settings' ? styles.selectedFooterButton : styles.footerButton} />
        </a>
      </Link>

    </div>
  )
}

export default Footer