import { createConfig } from "ponder";
import { http } from "viem";

import { ChainlinkPriceFeedAbi } from "./abis/ChainlinkPriceFeed";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    ETHUSDPriceFeed: {
      network: "mainnet",
      abi: ChainlinkPriceFeedAbi,
      address: "0x7d4E742018fb52E48b08BE73d041C18B21de6Fb5",
      startBlock: 22000000,
    },
  },
});
