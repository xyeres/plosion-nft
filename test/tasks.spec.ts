import { deployTestContract, getTestWallet } from "./test-helper";
import { waffle, run } from "hardhat";
import { expect } from "chai";
import sinon from "sinon";
import * as provider from "../lib/provider";

describe("tasks", () => {
  beforeEach(async () => {
    sinon.stub(provider, "getProvider").returns(waffle.provider);
    const wallet = getTestWallet();
    sinon.stub(process, "env").value({
      PUBLIC_KEY: wallet.address,
      PRIVATE_KEY: wallet.privateKey,
    });
  });

  describe("deploy-contract", () => {
    it("calls through and returns the transaction object", async () => {
      sinon.stub(process.stdout, "write");

      await run("deploy-contract");

      await expect(process.stdout.write).to.have.been.calledWith(
        "Contract address: 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"
      );
    });
  });

  describe("mint-nft", () => {
    beforeEach(async () => {
      const deployedContract = await deployTestContract("Card");
      process.env.NFT_CONTRACT_ADDRESS = deployedContract.address;
    });

    it("calls through and returns the transaction object", async () => {
      sinon.stub(process.stdout, "write");

      await run("mint-nft", { tokenUri: "https://example.com/record/4" });

      await expect(process.stdout.write).to.have.been.calledWith(
        "TX hash: 0x3b891ae7198c3c63b65e9772c210fb4694088cb4069af2c04bfadd8b71705545"
      );
    });
  });
});