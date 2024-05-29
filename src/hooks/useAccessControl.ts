import { ACCESS_CONTROL_CONTRACT } from "@/helper/core_constant";
import { useContractHook } from "./useContractCall";
import AccessControlABI from "../abi/AccessControlIERC20.json";
import { ethers } from "ethers";

export const useAccessControlIErc20 = () => {
  const { contract } = useContractHook(
    ACCESS_CONTROL_CONTRACT,
    AccessControlABI.abi
  );

  const mint = async (address: string, amount: number) => {
    if (!contract) throw new Error("Contract not initialized!");
    if (!address || !amount) throw new Error("Invalid input!");

    try {
      const tx = await contract.mint(
        address,
        ethers.utils.parseEther(String(amount))
      );
      await tx.wait();
      console.log(`Minted ${amount} tokens to ${address}`);
    } catch (error) {
      console.error("Error minting tokens:", error);
    }
  };

  const burn = async (address: string, amount: number) => {
    if (!contract) throw new Error("Contract not initialized!");
    if (!address || !amount) throw new Error("Invalid input!");
    try {
      const tx = await contract.mint(
        address,
        ethers.utils.parseEther(String(amount))
      );
      await tx.wait();
      console.log(`Burned ${amount} tokens from ${address}`);
    } catch (error) {
      console.error("Error burning tokens:", error);
    }
  };

  return {
    mint,
    burn,
  };
};
