import { useState } from "react";
import { ethers } from 'ethers';

import { Card, Grid, Button} from "@nextui-org/react";

const WalletBalance = () => {

    const [balance, setBalance] = useState(0);

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
        <Card bordered shadow={false} hoverable>
            <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                    <h5>Your Balance: {balance}</h5>
                </Grid>
                <Grid xs={3}>
                    <Button lat color="success" auto onClick={() => getBalance()}>Show My Balance</Button>
                </Grid>
            </Grid.Container>
        </Card>

    );
};

export default WalletBalance;