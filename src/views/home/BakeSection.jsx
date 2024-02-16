import {
  Stack,
  Paper,
  Typography,
  Box,
  Grid,
  Button,
  Divider,
  InputBase,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getContract, getSigner } from "../../utility/commonFunc";
const BakeSection = ({ address }) => {
  const [bnbAmount, setBnbAmount] = useState(0);

  const bakeBeans = async () => {
    console.log("address", address);
    try {
        if (!address) {
          alert("connect your wallet");
          return;
        }
        const contract = await getContract();
        
        console.log("contract:",contract);
        console.log("addresstest:",contract.address);
        console.log("addresstest:",contract.getBalance());

        await contract.seedMarket();

        // let tx = await contract.buyGold({value:ethers.utils.parseEther(1)});
        
    } catch (e) {
      console.log("$$$$$$$$$$$$$$:   ", e);
    }
  };

  const reBake = async () => {
    const contract = await getContract();
    try {
      let walletAddress = getSigner();
      let tx = await contract.BuryGold(walletAddress);
    } catch (error) {
      console.log(error);
    }
  };

  const eatBean = async () => {
    const contract = await getContract();
    try {
      let tx = await contract.sellGold();
      console.log(tx);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper sx={{ width: "100%", backgroundColor: "rgb(251, 241, 225)" }}>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography>Contract</Typography>
        <Typography textAlign="right" variant="h5">
          {`0 BNB`}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography>Wallet</Typography>
        <Typography textAlign="right" variant="h5">
          {`0 BNB`}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography>Your Beans</Typography>
        <Typography textAlign="right" variant="h5">
          {`0 BNB`}
        </Typography>
      </Stack>
      <Box
        mb={3}
        backgroundColor="#fff"
        sx={{
          border: "1px solid #000",
          position: "relative",
        }}
      >
        <InputBase
          sx={{
            p: "5px 80px 5px 20px",
            width: "100%",
            fontSize: "24px",
            "& .MuiInputBase-input": {
              textAlign: "right",
            },
          }}
          value={bnbAmount}
          onChange={(e) => setBnbAmount(e.target.value)}
        />
        <Typography
          component="p"
          variant="h5"
          color="#000"
          p={1}
          sx={{ position: "absolute", right: "10px", top: "3px" }}
        >
          BNB
        </Typography>
      </Box>
      <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={() => {
          console.log("clicked bake Bean");
          bakeBeans();
        }}
      >
        Bake BNBs
      </Button>

      {/* <Button variant='contained' fullWidth size='large' disabled>
          Bake BNBs
      </Button> */}

      <Divider sx={{ my: 3 }} />
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography component="p" fontWeight={700}>
          Your Rewards
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          {`0 BNB`}
        </Typography>
      </Stack>
      <Grid container columnSpacing={3}>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth size="large" onClick={reBake}>
            Re-Bake
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth size="large" onClick={eatBean}>
            Eat Beans
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BakeSection;
