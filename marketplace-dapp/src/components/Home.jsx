import { useState } from 'react';
import { ethers } from 'ethers';

import WalletBalance from './WalletBalance';
import NerdGuy from '../artifacts/contracts/UTG.sol/UnsatiableGuy.json';


const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user (execute transactions)
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, NerdGuy.abi, signer);

const Home = () => {

    const [totalMinted, setTotalMinted] = useState(0);

    const count = await contract.count();
    setTotalMinted(parseInt(count))

    return (
        <div>
            <WalletBalance />

            <h1>Nerd Guys NFT Collection</h1>
            <div className="container">
                <div className="row">
                    {
                        Array(totalMinted + 1).fill(0).map((_, i) => (
                            <div>
                                <NFTImage tokenId={i} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

function NFTImage({ tokenId, getCount }) {
    const contentId = "QmPr1xJmWAjFwP5iXoFcnbrARmLLXbNAWBKYizykhXAQP3";
    const metadatURI = `${contentId}/${tokenId}.json`;
    const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;

    const [isMinted, setIsMinted] = useState(false);

    const getMintedStatus = async () => {
        const result = await contract.isContentOwned(metadatURI);
        setIsMinted(result);
    };

}

export default Home;