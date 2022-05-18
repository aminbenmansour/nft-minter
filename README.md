# nft-marketplace

programatically generate NFTs from layers and minting them through a wallet on the ethereum through a smart contract inheriting the ERC-721 standard.
The contract is deployed to the polygon network (mumbai testnet) with alchemy and we can see our smart-contract in production.

## Usage
in `marketplace-dapp` folder, execute the following commands.
* install dependencies
```
npm install
```
then, the execution requires three running commands to run (in three separate terminals).


* creating local blockchain wallets
```
npx hardhat node
```

* compiling smart contracts and running scripts
```
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

* running the frontend application

Update the deployed contract address in `src/components/Home.js`
```
npm run dev
```

## Structure
This project is divided into two main parts `art-generator` and `marketplace-dapp`.
* `art-generator`:
  * getting layers in input and generates a random unique pictures.
* `marketplace-dapp`:
  * developing a product-ready smart-contract with OpenZeppelin to mint NFTs previously deployed to IPFS.
  * deploying the ERC-721 token with ALCHEMY.


