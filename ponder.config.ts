import { createConfig } from "ponder";

import { ChainlinkPriceFeedAbi } from "./abis/ChainlinkPriceFeed";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      rpc: process.env.PONDER_RPC_URL_1,
    },
  },
  contracts: {
    ETHUSDPriceFeed: {
      chain: "mainnet",
      abi: ChainlinkPriceFeedAbi,
      address: "0x7d4E742018fb52E48b08BE73d041C18B21de6Fb5",
      startBlock: 22000000,
    },
  },
});
