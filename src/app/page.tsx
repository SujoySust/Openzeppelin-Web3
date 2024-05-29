"use client";

import { CHAIN_INFO, INPUT_CHAIN_URL } from "@/lib/web3-connections/constants";
import { useEffect, useState } from "react";
import {
  switchNetwork,
} from "@/lib/web3-connections/connections";
import { ConnectionOptions } from "@/lib/components/ConnectionOptions";
import { useAccessControlIErc20 } from "@/hooks/useAccessControl";
import { useWalletConnect } from "@/hooks/useWalletConnect";

type DataType = {
  address: string;
  amount: number;
  isLoading: boolean;
};

export default function Home() {
  const {
    chainId,
    account,
    isActive,
    connector,
    connectionType,
    setConnectionType,
  } = useWalletConnect();

  const { mint, burn } = useAccessControlIErc20();

  const [mintData, setMintData] = useState<DataType>({
    address: "",
    amount: 0,
    isLoading: false,
  });

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <div className="row">
            <div className="col-md-8">
              <h2>Open Zeppline Form</h2>
              <p className="lead">
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>
              <h4>{`Connected Account: ${account}`}</h4>
              <h4>{`ChainId: ${chainId}`}</h4>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <h4>Connect Wallet</h4>
                  <ConnectionOptions
                    connector={connector}
                    activeConnectionType={connectionType}
                    isConnectionActive={isActive}
                    onActivate={setConnectionType}
                    onDeactivate={setConnectionType}
                  />
                </div>
                <div className="col-md-6">
                  <h4>Select Network</h4>
                  {Object.keys(CHAIN_INFO).map((chainId) => (
                    <div key={chainId}>
                      <button
                        className="btn btn-warning m-2"
                        onClick={() =>
                          switchNetwork(parseInt(chainId), connectionType)
                        }
                      >
                        {`Switch to ${CHAIN_INFO[chainId].label}`}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="To Address"
              value={mintData?.address}
              onChange={(e) =>
                setMintData({
                  ...mintData,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              value={mintData.amount}
              onChange={(e) =>
                setMintData({
                  ...mintData,
                  amount: Number(e.target.value),
                })
              }
            />
          </div>

          <div className="col-sm-3">
            <button
              className="btn btn-success"
              disabled={mintData.isLoading}
              onClick={async () => {
                setMintData({
                  ...mintData,
                  isLoading: true,
                });
                await mint(mintData.address, mintData.amount);
                setMintData({
                  ...mintData,
                  isLoading: false,
                });
              }}
            >
              Mint
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
