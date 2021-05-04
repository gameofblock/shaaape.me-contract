const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()

const mnemonic = process.env.MNEMONIC
const url = process.env.RPC_URL

const isInfura = !!process.env.INFURA_KEY

// const rinkebyNodeUrl = isInfura
//   ? "https://rinkeby.infura.io/v3/" + NODE_API_KEY
//   : "https://eth-rinkeby.alchemyapi.io/v2/" + NODE_API_KEY;

module.exports = {
  networks: {
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/v3/7f07383ded4d4ee4a6118c0d5eb80ab3"
        )
      },
      gas: 5000000,
      network_id: "*",
    },
    cldev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(mnemonic, url)
      },
      network_id: "42",
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
    },
  },
}
