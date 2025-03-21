"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Order, OrderStatus } from "@/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { colorMap } from "@/utils/helpersAndConsts";
import OrderCard from "@/components/OrderCard";
import BackButton from "@/components/BackButton";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const isUserLogged = useSelector((state: RootState) => state.auth.isUserLogged);

  const fetchOrders = async () =>
    await fetch(`${process.env.NEXT_PUBLIC_DATA_URL}/orders`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });

  useEffect(() => {
    if (isUserLogged) {
      fetchOrders();
    }
  }, [isUserLogged]);

  return (
    <>
      <div className="app-l-flex-row app-l-flex-row__align-center">
        <BackButton icon="back" className="app-h-mr-2" />
        <h1>Orders</h1>
      </div>
      <div className="app-h-mt-3">
        {isUserLogged ? (
          orders.map((order: Order, i: number) => (
            <Link
              href={`/orders/${order.orderId}`}
              className={`app-h-block ${i > 0 ? "app-h-mt-3" : ""}`}
              key={order.orderId}
            >
              <OrderCard {...order} statusColor={colorMap[order.orderStatus as OrderStatus]} />
            </Link>
          ))
        ) : (
          <div className="app-l-flex-col app-l-flex-col__align-center">
            <h2 className="app-h-fz-why2">You are not logged in</h2>
            <p className="app-h-fz-why1 app-h-mt-1">Please log in to view your orders</p>
          </div>
        )}
      </div>
    </>
  );
}
