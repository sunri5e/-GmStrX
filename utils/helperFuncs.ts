import { Order } from "./types";

export function generateOrders(count: number): Array<Order> {
  const statuses = ["Pending", "Success", "Failed"];
  const games = ["Game 1", "Game 2", "Game 3", "Game 4"];

  return Array.from({ length: count }, () => {
    const orderId = (Math.floor(Math.random() * 1000) + 100).toString();
    const gameID = (Math.floor(Math.random() * 10000) + 1000).toString();
    const orderDate = new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    ).toLocaleDateString("en-GB");

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
