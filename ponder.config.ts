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
      address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
      startBlock: 22000000,
    },
  },
});
