import { randomUUID } from "node:crypto";
import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { formatUnits } from "viem";

ponder.on("ETHUSDPriceFeed:NewRound", async ({ event, context }) => {
  const timestamp = event.block.timestamp;

  // Get the price from the contract
  const { ETHUSDPriceFeed } = await context.contracts;
  const decimals = await context.client.readContract({
    address: ETHUSDPriceFeed.address,
    abi: ETHUSDPriceFeed.abi,
    functionName: "decimals",
  });

  const priceInt = await context.client.readContract({
    address: ETHUSDPriceFeed.address,
    abi: ETHUSDPriceFeed.abi,
    functionName: "latestAnswer",
  });

  const price = formatUnits(priceInt, decimals);

  await context.db.insert(schema.prices).values({
    id: randomUUID(),
    price,
    timestamp,
    feed: "ETH-USD",
  });
});
