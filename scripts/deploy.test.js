const { ethers } = require("hardhat");

async function main() {
    const HtmlcoinNFT = await ethers.getContractFactory("HtmlcoinNFT");
    const htmlcoinNFT = await HtmlcoinNFT.deploy();
    await htmlcoinNFT.deployed();
    console.log(htmlcoinNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
