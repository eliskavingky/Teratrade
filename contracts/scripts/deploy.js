const hre = require("hardhat");

async function main() {
  const TerraToken = await hre.ethers.getContractFactory("TerraToken.sol");
  const token = await TerraToken.deploy();
  await token.deployed();
  console.log(`✅ TerraToken deployed at: ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

