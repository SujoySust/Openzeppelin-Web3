import { NETWORKS, CurrentConfig } from "./config";

export const INPUT_CHAIN_ID = CurrentConfig.network 
export const INPUT_CHAIN_URL = CurrentConfig.rpc;


type ChainInfo = {
    explorer: string
    label: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: 18
    }
    rpcUrl: string
  }
  

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
    [NETWORKS.MAINNET]: {
      explorer: 'https://etherscan.io/',
      label: 'Ethereum',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrl: 'https://eth-pokt.nodies.app',
    },
    [NETWORKS.TRUFFLE_TESTNET]: {
      explorer: 'https://etherscan.io/',
      label: 'Truflle Testnet',
      nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      rpcUrl: 'http://127.0.0.1:7545',
    },
    [NETWORKS.POLYGON]: {
      explorer: 'https://polygonscan.com/',
      label: 'Polygon',
      nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 },
      rpcUrl: 'https://polygon.meowrpc.com',
    },
  }

  export const CHAIN_TO_URL_MAP = {
    [NETWORKS.MAINNET]: CHAIN_INFO[NETWORKS.MAINNET].rpcUrl,
    [NETWORKS.TRUFFLE_TESTNET]: CHAIN_INFO[NETWORKS.MAINNET].rpcUrl,
  };
  
  // URLs
  export const METAMASK_URL = 'https://metamask.io/'