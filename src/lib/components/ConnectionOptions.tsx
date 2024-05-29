import { Connector } from "@web3-react/types";
import {
  CONNECTION_TYPE,
} from "../web3-connections/connections";
import { Option } from "./Option";

type ConnectOptionsParams = {
  connector: Connector;
  activeConnectionType: CONNECTION_TYPE | null | undefined;
  isConnectionActive: boolean;
  onActivate: (connectionType: CONNECTION_TYPE) => void;
  onDeactivate: (connectionType: null | undefined) => void;
};

export const ConnectionOptions = ({
  connector,
  activeConnectionType,
  isConnectionActive,
  onActivate,
  onDeactivate,
}: ConnectOptionsParams) => {
  function getOptions(isActive: boolean) {
    const isNoOptionAction =
      !isActive || (isActive && activeConnectionType === null);
    const metaMaskOption = (
      <Option
        connector={connector}
        isEnabled={
          isNoOptionAction || activeConnectionType === CONNECTION_TYPE.INJECTED
        }
        isConnected={activeConnectionType === CONNECTION_TYPE.INJECTED}
        connectionType={CONNECTION_TYPE.INJECTED}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    );

    const conbaseWalletOption = (
      <Option
        connector={connector}
        isEnabled={
          isNoOptionAction ||
          activeConnectionType === CONNECTION_TYPE.COINBASE_WALLET
        }
        isConnected={activeConnectionType === CONNECTION_TYPE.COINBASE_WALLET}
        connectionType={CONNECTION_TYPE.COINBASE_WALLET}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    );

    const walletConnectOption = (
      <Option
        connector={connector}
        isEnabled={
          isNoOptionAction ||
          activeConnectionType === CONNECTION_TYPE.WALLET_CONNECT
        }
        isConnected={activeConnectionType === CONNECTION_TYPE.WALLET_CONNECT}
        connectionType={CONNECTION_TYPE.WALLET_CONNECT}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    );

    return (
      <>
        {metaMaskOption}
        {conbaseWalletOption}
        {walletConnectOption}
      </>
    );
  }

  return <div className="connectors">{getOptions(isConnectionActive)}</div>;
};
