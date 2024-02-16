import { Link } from "react-router-dom";
import {
  Stack,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Logo from "../../assets/images/logo.png";
import Etherscan from "../../assets/images/etherscan.png";
import Telegram from "../../assets/images/telegram.png";
import Twitter from "../../assets/images/twitter.png";
import BakeSection from "./BakeSection";
import NutritionSection from "./NutritionSection";
import LinkSection from "./LinkSection";

import { useEffect, useState } from "react";
import contract from "./contract.json";
import { ethers } from "ethers";
const abi = contract.abi;
// ***thirdweb usage
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

// import { usewallet } from 'react-connect-wallet'
const ConnectBtn = (props) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        p: "10px",
        backgroundColor: "rgb(244, 181, 45)",
        color: "rgb(23, 33, 94)",
        boxShadow: "rgb(0 0 0 / 59%) 6px 6px 20px 6px",
        "&:hover": {
          opacity: 0.5,
          backgroundColor: "rgb(244, 181, 45)",
        },
      }}
      onClick={() => {}}
    ></Button>
  );
};

const HomeView = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const connectWalletButton = () => {
    return (
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          p: "10px",
          backgroundColor: "rgb(244, 181, 45)",
          color: "rgb(23, 33, 94)",
          boxShadow: "rgb(0 0 0 / 59%) 6px 6px 20px 6px",
          "&:hover": {
            opacity: 0.5,
            backgroundColor: "rgb(244, 181, 45)",
          },
        }}
        onClick={connectWithMetamask}
      >
        Connect
      </Button>
    );
  };

  const disconnectWalletButton = () => {
    return (
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
          p: "10px",
          backgroundColor: "rgb(244, 181, 45)",
          color: "rgb(23, 33, 94)",
          boxShadow: "rgb(0 0 0 / 59%) 6px 6px 20px 6px",
          "&:hover": {
            opacity: 0.5,
            backgroundColor: "rgb(244, 181, 45)",
          },
        }}
        onClick={disconnectWallet}
      >
        {" "}
        Disconnect
      </Button>
    );
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={3}
      mx="auto"
      width={400}
      pb={3}
    >
      <Link to="#">
        <img src={Logo} alt="Baked Beam" style={{ marginBottom: "-50px" }} />
      </Link>
      <Typography component="p" fontWeight="bold" textAlign="center">
        The BNB Reward Pool with the tastiest daily return and lowest dev fee
      </Typography>
      {/* Baking Section */}
      <BakeSection />

      {/* Nutrition Section */}
      <NutritionSection />

      {/* Link Section */}
      <LinkSection />

      <Stack
        sx={{ width: "50%" }}
        direction="row"
        justifyContent="space-between"
      >
        <Link to="#">
          <img src={Etherscan} alt="Etherscan" />
        </Link>
        <Link to="#">
          <img src={Telegram} alt="Telegram" />
        </Link>
        <Link to="#">
          <img src={Twitter} alt="Twitter" />
        </Link>
      </Stack>
      {address ? disconnectWalletButton() : connectWalletButton()}
    </Stack>
  );
};

export default HomeView;
