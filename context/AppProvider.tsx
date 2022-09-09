import { Transaction } from '../types/Transactions';
import React, { createContext, useEffect, useReducer } from 'react'
import { connectWallet, getBalance } from '../utils/ethers';


//Initial State Interface
type State = {
  user: string | null,
  balance: number | null,
  transactions: Transaction[] | null,
}

//Initial State
const initialState: State = {
  user: null,
  balance: null,
  transactions: null,
}

//Action Enums
export enum ActionKind {
  SET_USER = "SET_USER",
  UNSET_USER = "UNSET_USER",
  SET_BALANCE = "SET_BALANCE",
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
}

// Action Interface
interface Action {
  type: ActionKind;
  payload: any;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionKind.SET_USER: {
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      }
    }
    case ActionKind.UNSET_USER: {
      return {
        ...state,
        user: null,
      }
    }

    case ActionKind.SET_BALANCE: {
      return {
        ...state,
        balance: action.payload,
      }
    }



    case ActionKind.SET_TRANSACTIONS: {
      return {
        ...state,
        transactions: action.payload,
      }
    }

    default:
      return state;
  }
}

export const AppContext = createContext({} as any);
const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // @ts-ignore
    window.ethereum.on("accountsChanged", function (accounts: String) {
      dispatch({ type: ActionKind.SET_USER, payload: accounts[0] });
      getBalance().then((bal) => {
        dispatch({ type: ActionKind.SET_BALANCE, payload: bal });
      });
    });
  }, []);

  useEffect(() => {
    const connect = async () => {
      const accounts: any = await connectWallet();
      if (accounts.length) {
        // console.log(accounts[0]);
        if (!state.user) dispatch({ type: ActionKind.SET_USER, payload: accounts[0] });
        getBalance().then((bal) => {
          dispatch({ type: ActionKind.SET_BALANCE, payload: bal });
        });
      }
    }
    connect();
  }, [state.user]);

  return <AppContext.Provider value={{ state, dispatch } as { state: State }}>{children}</AppContext.Provider>
}

export default AppProvider;