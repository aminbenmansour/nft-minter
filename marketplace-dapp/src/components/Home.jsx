import WalletBalance from './WalletBalance';

import NerdGuy from '../artifacts/contracts/UTG.sol/UnsatiableGuy.json';

import { ethers } from 'ethers';

const Home = () => {

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const provider = new ethers.providers.Web3Provider(window.ethereum);


    return (
        <div>
            <WalletBalance/>
        </div>
    );
}

export default Home;