export const convertPrice = (price, currency = "$") =>
  currency + price?.toLocaleString("vi-VN");
