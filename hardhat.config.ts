import("@nomiclabs/hardhat-waffle");
import { env } from "./lib/env";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// const argv = JSON.parse(env("npm_config_argv"));
// if (argv.original !== ["hardhat", "test"]) {
//   require('dotenv').config();
// }

import("./tasks/nft");

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.6",
  // networks: {
  //   mumbai: {
  //     url: process.env.ALCHEMY_API_HTTP,
  //     accounts: [`0x${process.env.PRIVATE_KEY}`]
  //   }
  // }
};

export default config;