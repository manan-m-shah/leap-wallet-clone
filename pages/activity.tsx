import React, { useContext, useEffect } from 'react'
import { ActionKind, AppContext } from '../context/AppProvider';
import axios from 'axios';
import { Transaction } from '../types/Transactions';
import { returnShortAddress } from '../utils/functions';
import { formatUnits } from 'ethers/lib/utils';
import Image from 'next/image';

const activity = () => {
  const { state, dispatch } = useContext(AppContext);

  const getTransactions = async () => {
    if (!state.user) return;
    const url = `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${state.user}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=TMM9BSGA7GSGSQDVKIPD89DAZX442G949I`;
    const response = await axios.get(url);
    console.log(response.data.result);
    if (response.data.status == 1) {
      dispatch({ type: ActionKind.SET_TRANSACTIONS, payload: response.data.result });
    }
  }

  useEffect(() => {
    getTransactions();
  }, [state.user]);

  useEffect(() => {
    console.log(state.transactions);
  }, [state.transactions]);

  //show sent/received, to/from, amount, date
  return (
    <div className='flex flex-col flex-1 gap-y-4 px-8 h-full'>
      {state.transactions && state.transactions.map((transaction: Transaction, index: number) => {
        // @ts-ignore
        const d = new Date(transaction.timeStamp * 1000);
        const date = d.toLocaleDateString();

        return (
          <div className='bg-normalBlueBg flex items-center px-2 py-1 rounded-lg' key={index}>
            <div>
              <Image src="/images/polygon-token.svg" alt="matic token" width={24} height={24} />
            </div>
            <div className='flex-1 p-4'>
              <h1 className='text-gray-300'>{transaction.from === state.user ? "Sent" : "Received"}</h1>
              <h2 className='text-xs text-lightGrayBg'>To: {transaction.from === state.user ? returnShortAddress(transaction.to) : returnShortAddress(transaction.from)}</h2>
            </div>
            <div>
              <h1 className='text-gray-300'>{formatUnits((transaction.value), "ether")}</h1>
              <h2 className='text-xs text-lightGrayBg'>{date}</h2>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default activity