import { useState } from "react";

const WalletBalance = () => {
    
    const [balance, SetBalance] = useState(0);

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    };
};
 
export default WalletBalance;