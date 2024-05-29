import {
  CONNECTION_TYPE,
  getConnection,
} from "@/lib/web3-connections/connections";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export const useWalletConnect = () => {
  const { chainId, account, isActive, connector } = useWeb3React();
  const [connectionType, setConnectionType] = useState<
    CONNECTION_TYPE | null | undefined
  >(null);

  useEffect(() => {
    if (!isActive) {
      setConnectionType(undefined);
    } else {
      setConnectionType(getConnection(connector)?.type ?? undefined);
    }
  }, [connector, isActive]);

  return {
    chainId,
    account,
    isActive,
    connector,
    connectionType,
    setConnectionType
  };
};
