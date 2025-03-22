import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

/**
 * Deploys a contract named "NzInvestDao2" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployNzInvestDao2: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const initialMembers = ["0xf96136895C9Eb21fA54cdE326D78CEC52beCa0FA", "0x90A28F6f9f25CBF2aff22370C3509f4C93516CBe"];

  const initialBalances = [
    ethers.parseEther("1000"), // 1000 tokens for the AI
    ethers.parseEther("300"), // 300 tokens for the first member
  ];

  await deploy("NzInvestDao2", {
    from: deployer,
    // Contract constructor arguments
    args: [initialMembers, initialBalances],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // // Get the deployed contract to interact with it after deploying.
  // const NzInvestDao2 = await hre.ethers.getContract<Contract>("NzInvestDao2", deployer);
  // // console.log("👋 Initial greeting:", await NzInvestDao2.greeting());
};

export default deployNzInvestDao2;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags NzInvestDao2
deployNzInvestDao2.tags = ["NzInvestDao2"];
