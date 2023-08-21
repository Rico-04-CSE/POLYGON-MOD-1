const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Clover.sol/Clover.json");

const tokenAddress = "0xe32989B1214e8551375C2BF48d2B79Bf45819a0e"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x620a006423570F0Ad1d3DACBAf2E37d151037173"; // Ethereum public address for the wallet

async function main() {
    // Get the contract instance of the deployed ERC721A contract
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    // Log the total number of ERC721A tokens owned by the specified wallet address
    // console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + "  tokens");
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
 // Call the main function and handle any errors
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
