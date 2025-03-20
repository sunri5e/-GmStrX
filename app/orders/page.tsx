import Link from "next/link";

function generateOrders(count: number): Array<{
  orderId: string;
  orderDate: string;
  orderStatus: string;
  gameName: string;
  gameID: string;
  amount: string;
}> {
  const statuses = ["Pending", "Delivered", "Cancelled", "Shipped"];
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

export default function Orders() {
  const orders = generateOrders(10);
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.orderId}>
          <Link href={`/orders/${order.orderId}`} className="app-btn">
            <div>
              <span>Transaction ID</span> #{order.orderId}
            </div>
            <div>
              <span>Date</span>
              {order.orderDate}
            </div>
            <div>
              <span>Status</span>
              {order.orderStatus}
            </div>
            <div>
              <span>Game Name</span>
              {order.gameName}
            </div>
            <div>
              <span>Game ID</span>
              {order.gameID}
            </div>
            <div>
              <span>Ammount</span> ${order.amount}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
