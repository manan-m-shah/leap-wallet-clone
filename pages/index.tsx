import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ActionKind, AppContext } from '../context/AppProvider'
import { connectWallet } from '../utils/ethers'

const styles = {
  buttons: 'bg-normalBlueBg w-1/2 rounded-lg py-4 text-xs',

}

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AppContext);

  if (!state.user) {
    return (
      <div className='flex justify-center items-center px-8'>
        <button
          className='text-center w-full bg-greenBg my-4 py-3 rounded-lg text-sm'
          onClick={async () => {
            const accounts: any = await connectWallet()
            if (accounts.length) {
              dispatch({ type: ActionKind.SET_USER, payload: accounts[0] })
            }
          }}
        >
          Connect to MetaLeap Wallet
        </button>
      </div>
    )
  }

  return (
    <div className='mx-6 flex flex-col'>
      <div className='w-full'>
        <div className='w-full p-[2px] rounded-lg bg-gradient-to-b from-greenBg to-darkBlueBg'>
          <div className='w-full flex justify-center items-center gap-x-4 p-6 bg-darkBlueBg rounded-lg'>
            <Image src="/images/polygon-token.svg" alt="matic token" width={32} height={32} />
            <h1 className='text-2xl font-bold'>{state?.balance?.substring(0, 4)}</h1>
          </div>
        </div>
        <div className='w-full flex gap-x-4'>
          <button className={styles.buttons}>Send</button>
          <button className={styles.buttons}>Deposit</button>
        </div>
      </div>
      <hr className='w-[60%] place-self-center border-darkGrayBg my-4' />
      <div>
        <div className='flex w-full justify-between items-center'>
          <h1 className='text-grayText text-xs'>Hide small balances</h1>
          <label
            htmlFor="default-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              defaultValue=""
              id="default-toggle"
              className="sr-only peer"
            />
            <div className="w-10 h-3 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:bg-greenBg after:content-[''] after:absolute after:-top-1 after:bg-lightGrayBg after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-lightGreenBg" />
          </label>
        </div>
        <div className='flex justify-between bg-normalBlueBg px-4 py-6 rounded-lg my-4'>
          <div className='flex gap-x-4'>
            <Image src="/images/polygon-token.svg" alt="matic token" width={24} height={24} />
            <h1>Matic</h1>
          </div>
          <h1 className='text-sm font-semibold'>{state?.balance?.substring(0, 5)}</h1>
        </div>
        <button className='text-center w-full bg-greenBg my-4 py-3 rounded-lg text-sm'>
          Manage Tokens
        </button>
      </div>
    </div>
  )
}

export default Home
