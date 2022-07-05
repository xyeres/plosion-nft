require('dotenv').config()
require("@nomiclabs/hardhat-ethers")
const { ALCHEMY_API_HTTP, PRIVATE_KEY } = process.env;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    mumbai: {
      url: ALCHEMY_API_HTTP,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
