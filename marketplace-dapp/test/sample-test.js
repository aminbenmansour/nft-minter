const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("UTG", function() {
  it("Should mint and transfer an NFT to someone", async function () {
    const NerdGuy = await ethers.getContractFactory("UnsatiableGuy");
    const nerdGuy = await NerdGuy.deploy();

    await nerdGuy.deployed();

    
  });
});