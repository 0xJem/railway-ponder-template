import { ponder } from "ponder:registry";

ponder.on("ETHUSDPriceFeed:NewRound", async ({ event, context }) => {
  console.log(event);
});
