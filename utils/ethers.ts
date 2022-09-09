import { ethers } from 'ethers';

let eth: any

if (typeof window !== 'undefined') {
  // @ts-ignore
  eth = window.ethereum
}

export const connectWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert("Please install metamask ");

    const accounts = await metamask.request({ method: "eth_requestAccounts" });

    return accounts;
  } catch (error) {
    console.error(error);
    throw new Error("No ethereum object.");
  }
};

export const getWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert("Please install metamask ");

    const accounts = await metamask.request({ method: "eth_accounts" });

    return accounts;
  } catch (error) {
    console.error(error);
    throw new Error("No ethereum object.");
  }
};

export const getBalance = async (metamask = eth) => {
  try {
    if (!metamask) return alert("Please install metamask ");
    const currentAccount = await connectWallet();
    // console.log(currentAccount);
    const balance = await metamask.request({
      method: "eth_getBalance",
      params: [currentAccount[0], "latest"],
    });
    // // console.log(balance);
    // console.log(`balance: ${balance} WEI`);
    // convert a currency unit from wei to ether
    const balanceInEth = ethers.utils.formatEther(balance);
    // console.log(`balance: ${balanceInEth} ETH`);
    return balanceInEth;
  } catch (error) {
    console.error(error);
    throw new Error("No ethereum object.");
  }
};

export const getTransactionHistory = async (address: string) => {
  try {
    let etherscanProvider = new ethers.providers.EtherscanProvider("maticumum");
    etherscanProvider.getHistory(address).then((history) => {
      history.forEach((tx) => {
          console.log(tx);
      })
    });
  } catch (error) {
    console.log(error);
  }
}

