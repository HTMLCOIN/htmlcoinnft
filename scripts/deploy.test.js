const { ethers } = require("hardhat");

async function main() {
    const QtumNFT = await ethers.getContractFactory("QtumNFT");
    const qtumNFT = await QtumNFT.deploy();
    await qtumNFT.deployed();
    console.log(qtumNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });