// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// [_,per1,per2,per3] = await ethers.getSigners()

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const NFT = await NFTMarket.deploy();

  await NFT.deployed();

  console.log(
    "This is SmartContract",NFT.address
  );
}
//this is smartcontract:   0xdB9d8c0cD7A583A7ee77296cfC076A14Bb0F05Ed

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
