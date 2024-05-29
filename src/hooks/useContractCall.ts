import { getConnection } from "@/lib/web3-connections/connections";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Contract, ethers } from "ethers";
import { useCallback, useEffect, useReducer, useState } from "react";

export const useContractHook = (
  contractAddress: string,
  abi: any
) => {
  const [contract, setContract] = useState<Contract | null>(null);
  const { isActive, connector, provider } = useWeb3React<Web3Provider>();

  useEffect(() => {
    if (!isActive) return;
    const connection = getConnection(connector);
    const { hooks } = connection;
    // const provider = hooks.useProvider();
    if (!provider) return;

    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    setContract(contractInstance);
  }, [isActive]);

  return {
    contract,
  };
};
