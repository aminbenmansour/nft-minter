# nft-marketplace

## Usage
in `marketplace-dapp` folder, execute the following commands.
* install dependencies
```
npm install
```
then, the execution requires three running commands to run (in three separate terminals.


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
```
npm run dev
```