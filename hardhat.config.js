require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config({path: __dirname+'/.env'})
require("@nomiclabs/hardhat-etherscan");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY =  process.env.API_KEY;

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = process.env.SECERET_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "GC3A7BY9VEP5R54SDEGT3EQVE9G4AC13PV"
    },
};


// module.exports = {
//   defaultNetwork: "rinkeby",
//   networks: {
//     hardhat: {
//     },
//     rinkeby: {
//       url: process.env.API_KEY,
//       accounts: [process.env.SECERET_KEY]
//     }
//   },
//   etherscan: {
//     // Your API key for Etherscan
//     // Obtain one at https://etherscan.io/
//     apiKey: "95UVA1RCHKJWHNQEJ47W8TD2C6NFXSAMG5"
//   },

//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }
