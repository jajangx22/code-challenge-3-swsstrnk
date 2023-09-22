require("@nomicfoundation/hardhat-toolbox");


const accounts = ["HIDDEN"];

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", 
      accounts: accounts,
    },
    sepolia: {
      url: "https://rpc.sepolia.org", 
      accounts: accounts,
    },
    mumbai: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public", 
      accounts: accounts,
    },
  },
};