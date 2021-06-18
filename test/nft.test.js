const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("QtumNFT", function() {
    it("Should return the new qtum nft once it's changed", async function() {
        const QtumNFT = await ethers.getContractFactory("QtumNFT");
        const qtumNFT = await QtumNFT.deploy();

        await qtumNFT.deployed();
        const res = await qtumNFT.createNFTItem(
            "cat",
            "https://www.baidu.com",
            "cat",
            10
        );
        const r1 = await qtumNFT.getNFTInfoById(0);
        console.log(r1);
    });
});