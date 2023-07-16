export const convertPrice = (price, currency = "$") =>
  currency + price?.toLocaleString("en-US");
