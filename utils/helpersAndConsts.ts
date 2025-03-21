import { Order } from "./types";

export function generateOrders(count: number): Array<Order> {
  const statuses = ["Pending", "Success", "Failed"];
  const games = ["Shadow Quest", "Cyber Drive", "Arcane Realm", "Galactic War", "Dungeon Run"];

  return Array.from({ length: count }, () => {
    const orderId = (Math.floor(Math.random() * 100000) + 100).toString();
    const gameID = (Math.floor(Math.random() * 10000000000) + 1000).toString();
    const orderDate = new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    )
      .toISOString()
      .split("T")[0]
      .split("-")
      .reverse()
      .join(".");

    return {
      orderId,
      orderDate,
      orderStatus: statuses[Math.floor(Math.random() * statuses.length)],
      gameName: games[Math.floor(Math.random() * games.length)],
      gameID,
      amount: (Math.random() * (100 - 10) + 10).toFixed(2),
    };
  });
}

export const colorMap = {
  Pending: "#FFC107",
  Success: "#28A745",
  Failed: "#DC3545",
};

export const currencyData = [
  { value: "usd", label: "USD", image: "/usd.svg" },
  { value: "uah", label: "UAH", image: "/usd.svg" },
  { value: "eur", label: "EUR", image: "/usd.svg" },
];

export const countriesData = [
  { value: "en", label: "EN", image: "/GB.svg" },
  { value: "ua", label: "UA", image: "/UA.svg" },
];
