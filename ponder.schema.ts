import { onchainTable } from "ponder";

export const prices = onchainTable("prices", (t) => ({
  id: t.uuid().primaryKey(),
  feed: t.text().notNull(),
  price: t.text().notNull(),
  timestamp: t.bigint().notNull(),
}));
