// Sets if the example should run locally or on chain
export enum NETWORKS {
  MAINNET = 1,
  TRUFFLE_TESTNET = 1337,
  POLYGON = 137,
}

// Inputs that configure this example to run
interface ExampleConfig {
  network: NETWORKS;
  rpc: string;
}

// Example Configuration
export const CurrentConfig: ExampleConfig = {
  network: NETWORKS.TRUFFLE_TESTNET,
  rpc: "http://127.0.0.1:7545",
};