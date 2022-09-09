import Image from 'next/image'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import { returnShortAddress } from '../utils/functions';

const Navbar = () => {

  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <div className='flex py-6 px-4 items-center'>
        <Image src='/images/logo.svg' alt="logo" width={32} height={32} className='' />
        <button className='flex-1 flex justify-center items-center'>
          {
            state.user && <div className='flex flex-col items-center'>
              <h1 className='font-semibold text-sm'>Manan Shah</h1>
              <div className='flex gap-x-2'>
                <h2 className='text-xs text-grayText'>{returnShortAddress(state.user)}</h2>
                <Image src='/icons/copy.svg' alt="copy-address" width={10} height={10} />
              </div>
            </div>
          }
        </button>
        <div className='p-2 bg-normalBlueBg rounded-lg'>
          <Image src='/icons/menu.svg' alt="menu" width={20} height={20} />
        </div>
      </div>
      <hr className='w-[60%] place-self-center border-darkGrayBg mb-6' />
    </>
  )
}

export default Navbar