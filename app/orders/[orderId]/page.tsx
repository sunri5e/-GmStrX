import { colorMap } from "@/utils/helpersAndConsts";
import { OrderStatus } from "@/utils/types";
import Image from "next/image";
import OrderCard from "@/components/OrderCard";
import BackButton from "@/components/BackButton";

export default async function OrderPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = await fetch(`${process.env.DATA_URL}/orders/${orderId}`).then((res) => res.json());
  const orderDetails = order.details;

  return (
    <>
      <div className="app-l-flex-row app-l-flex-row__align-center">
        <BackButton icon="close" className="app-h-mr-2" />
        <h1 className="app-h-fz-why1">#{orderId}</h1>
      </div>
      <div className="app-h-mt-3">
        <OrderCard {...order} statusColor={colorMap[order.orderStatus as OrderStatus]} />
      </div>
      <div className="app-l-flex-row app-l-flex-row__space-between app-l-flex-row__align-center app-h-mt-3">
        <p className="app-h-fz-why2">Your Goods:</p>
        <p className="app-h-fz-why1 app-h-bold">1 - {orderDetails.currentGoods}</p>
      </div>
      <div className="app-card app-card--illustrated app-h-mt-3">
        <Image
          src={`https://picsum.photos/id/${Math.floor(parseFloat(order.amount))}/176.webp`}
          alt={`PIcture for order ${orderId}`}
          width={88}
          height={88}
          className="app-card__image"
        />
        <div className="app-card__content">
          <div className="app-l-flex-row app-l-flex-row__align-center">
            <span className="app-h-fz-larger app-h-bold app-h-mr-2">{orderDetails.total}</span>
            <span className="app-h-bold app-h-line-halo">{orderDetails.change}</span>
          </div>
          <div className="app-l-flex-row app-l-flex-row__align-center">
            <span className="app-h-fz-large app-h-bold  app-h-mr-1">
              {orderDetails.currentGoods}$
            </span>
            <span className="app-h-line-through app-h-color-secondary">
              {orderDetails.initialGoods}$
            </span>
          </div>
        </div>
      </div>
      <div className="app-h-mt-3">
        <button className="app-btn app-btn--regular app-btn--w100">
          <span className="app-btn__text">Ask ?</span>
        </button>
      </div>
    </>
  );
}
