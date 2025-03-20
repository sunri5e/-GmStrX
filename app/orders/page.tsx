import Link from "next/link";
import { Order, OrderStatus } from "@/utils/types";
import { generateOrders } from "@/utils/helperFuncs";
import OrderCard from "@/components/OrderCard";
import BackButton from "@/components/BackButton";

const colorMap = {
  Pending: "#FFC107",
  Success: "#28A745",
  Failed: "#DC3545",
};

export default async function Orders() {
  let orders: Order[] = [];
  await fetch("http://localhost:8000/orders")
    .then((res) => res.json())
    .then((data) => {
      orders = data;
    })
    .catch((err) => {
      console.error(err);
      orders = generateOrders(10);
    });

  return (
    <>
      <div className="app-l-flex-row app-l-flex-row__align-center">
        <BackButton icon="back" className="app-h-mr-2" />
        <h1>Orders</h1>
      </div>
      <div className="app-h-mt-3">
        {orders.map((order: Order, i: number) => (
          <Link
            href={`/orders/${order.orderId}`}
            className={`app-h-block ${i > 0 ? "app-h-mt-3" : ""}`}
            key={order.orderId}
          >
            <OrderCard {...order} statusColor={colorMap[order.orderStatus as OrderStatus]} />
          </Link>
        ))}
      </div>
    </>
  );
}
