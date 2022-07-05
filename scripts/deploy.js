const { ethers } = require("hardhat");

async function main() {
  const CardNFT = await ethers.getContractFactory("Card")
  const myCard = await CardNFT.deploy()

  myCard.deployed()

  console.log("Contract deployed to address:", myCard.address)

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
