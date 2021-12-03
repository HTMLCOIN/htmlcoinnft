const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HtmlcoinNFT", function() {
    it("Should return the new htmlcoin nft once it's changed", async function() {
        const HtmlcoinNFT = await ethers.getContractFactory("HtmlcoinNFT");
        const htmlcoinNFT = await HtmlcoinNFT.deploy();

        await htmlcoinNFT.deployed();
        const res = await HtmlcoinNFT.createNFTItem(
            "cat",
            "https://bashupload.com",
            "cat",
            10
        );
        const r1 = await htmlcoinNFT.getNFTInfoById(0);
        console.log(r1);
    });
});
