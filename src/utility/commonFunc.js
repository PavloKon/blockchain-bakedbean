import { ethers } from "ethers";

export const getContract = async () => {
  const provider1= window.provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider1.send("eth_requestAccounts", []);
  const signer1 = provider1.getSigner();
  console.log('signer:',signer1)
  const contractAbi = require("./contract_abi.json");
  const abi = contractAbi.abi;
  const contract1= window.contract = new ethers.Contract(
    process.env.REACT_APP_ADDRESS,
    abi,
    signer1
  );
  return contract1;
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

export const connectWallet = async () => {
  const chainId = process.env.REACT_APP_chainId;
  if (window.ethereum) {
    try {
      const chain = await window.ethereum.request({ method: "eth_chainId" });
      if (parseInt(chain, 16) == chainId) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Your wallet is connected to the site.",
          };
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          };
        }
      } else {
        window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    console.log("new window");
    return {
      address: "",
      status: (
        <span style={{ color: "red !important" }}>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.(https://metamask.io/download.html)
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  const chainId = process.env.REACT_APP_CHAINID;

  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      const chain = await window.ethereum.request({
        method: "eth_chainId",
      });
      if (addressArray.length > 0 && chain === chainId) {
        return {
          address: addressArray[0],
          status: "👆🏽 You can mint new pack now.",
        };
      } else {
        return {
          address: "",
          status:
            "🦊 Connect to Metamask and choose the correct chain using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span style={{ color: "red" }}>
          <p>
            {" "}
            🦊{" "}
            {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
            {/* </a> */}
          </p>
        </span>
      ),
    };
  }
};
