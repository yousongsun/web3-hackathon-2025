import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { ethers } from "hardhat";

/**
 * Deploys a contract named "RealEstate" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployRealEstate: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  console.log("Deploying contracts with the account:", deployer);
  const { deploy } = hre.deployments;

  // Set up the DAO token address and property price
  const daoTokenAddress = "0x90A28F6f9f25CBF2aff22370C3509f4C93516CBe"; // Replace with actual DAO token contract address
  const propertyPrice = ethers.parseEther("1.0"); // Example: Set property price to 1 Ether

  await deploy("RealEstate", {
    from: deployer,
    // Contract constructor arguments
    args: [deployer, daoTokenAddress, propertyPrice],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const RealEstate = await hre.ethers.getContract<Contract>("RealEstate", deployer);
  // console.log("👋 Initial greeting:", await RealEstate);
  console.log(RealEstate);
};

export default deployRealEstate;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags RealEstate
deployRealEstate.tags = ["RealEstate"];
