# NFT_Collection_Launch

This project is a smart contract for launching an exclusive NFT collection. The admin can create a collection for whitelist users, allowing them to mint NFTs before the public sale. After the whitelist phase, the collection is available for public minting at a fixed price of **0.1 Ether** per NFT.

## Features

- **Whitelist Minting**: Admin can create a collection that is initially available only to whitelisted users.
- **Public Minting**: Once the whitelist phase is over, anyone can mint NFTs at a price of 0.1 Ether.
- **Admin Control**: The admin manages the whitelist and controls when the public minting starts.
- **Mint Limit**: Set a limit on the number of NFTs each address can mint during both phases.
- **Gas Optimization**: Efficient minting process to reduce gas costs.

## Getting Started

### Prerequisites

- Node.js
- Hardhat or Truffle (for contract deployment)
- Ethereum wallet (e.g., MetaMask)
- Test Ether (for testnet deployments)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NFT_Collection_Launch/NFT_Collection_Launch.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NFT_Collection_Launch
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Deployment

1. Deploy the smart contract to your preferred Ethereum network (e.g., Rinkeby or Goerli Testnet):
   ```bash
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

2. Configure the whitelist and public minting in the contract using the admin account.

### Configuration

After deploying the contract, the admin can:

- **Set Whitelist**: Add addresses to the whitelist.
- **Start Public Sale**: Open minting for the public with a fixed price of 0.1 Ether per NFT.
  
For whitelist users, minting will be allowed before the public sale starts.

## Usage

### Whitelist Minting

Whitelisted users can mint NFTs by interacting with the contract:

```javascript
await nftCollection.whitelistMint({ value: 0.1 ether });
```

### Public Minting

Once public minting is live, anyone can mint NFTs by sending 0.1 Ether:

```javascript
await nftCollection.publicMint({ value: 0.1 ether });
```

### Admin Functions

- **Add to Whitelist**: Admin can add addresses to the whitelist.
- **Start Public Sale**: Open minting for the public.

## License

This project is licensed under the MIT License.

## 🚀 Contact

For any questions, feedback, or inquiries, feel free to reach out to **Mohsin Ali Solangi**. You can connect via the following platforms:

🌐 **Linktree**: [Mohsin Ali Solangi](https://linktr.ee/mohsinalisolangi)

🔗 **LinkedIn**: [Mohsin Ali Solangi](https://www.linkedin.com/in/mohsinalisolangi/)

Looking forward to hearing from you! 😄
