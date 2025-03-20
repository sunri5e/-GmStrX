import { colorMap } from "@/utils/helpersAndConsts";
import { OrderStatus } from "@/utils/types";
import OrderCard from "@/components/OrderCard";
import BackButton from "@/components/BackButton";

export default async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = await fetch(
    `https://my-json-server.typicode.com/sunri5e/-GmStrX/orders/${orderId}`,
  ).then((res) => res.json());

  return (
    <>
      <div className="app-l-flex-row app-l-flex-row__align-center">
        <BackButton icon="close" className="app-h-mr-2" />
        <h1>#{orderId}</h1>
      </div>
      <div className="app-h-mt-3">
        <OrderCard {...order} statusColor={colorMap[order.orderStatus as OrderStatus]} />
      </div>
    </>
  );
}
