import WalletBalance from './WalletBalance';

import { ethers } from 'ethers';

import NerdGuy from '../artifacts/contracts/UTG.sol/UnsatiableGuy.json';

const Home = () => {

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // get the end user (execute transactions)
    const signer = provider.getSigner();

    // get the smart contract
    const contract = new ethers.Contract(contractAddress, NerdGuy.abi, signer);

    return (
        <div>
            <WalletBalance/>
        </div>
    );
}

export default Home;