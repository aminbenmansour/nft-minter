import { useState } from "react";
import ethers from 'ethers';

const WalletBalance = () => {
    
    const [balance, SetBalance] = useState(0);

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const balance = await provider.getBalance(account);
    };
};
 
export default WalletBalance;