import Link from "next/link";
import { OrderStatus } from "@/utils/types";
import { generateOrders } from "@/utils/helperFuncs";
import OrderCard from "@/components/OrderCard";

const colorMap = {
  Pending: "#FFC107",
  Success: "#28A745",
  Failed: "#DC3545",
};

export default function Orders() {
  const orders = generateOrders(10);
  return (
    <>
      <h1>Orders</h1>
      {orders.map((order, i) => (
        <Link
          href={`/orders/${order.orderId}`}
          className={`app-h-block ${i > 0 ? "app-h-mt-3" : ""}`}
          key={order.orderId}
        >
          <OrderCard {...order} statusColor={colorMap[order.orderStatus as OrderStatus]} />
        </Link>
      ))}
    </>
  );
}
