import { Order } from "@/utils/types";

export default function OrderCard(props: Order & { statusColor: string }) {
  const { statusColor, ...order } = props;
  return (
    <div className="app-card">
      <div className="app-card__item">
        <span className="app-card__item-label">Transaction ID</span>
        <span>#{order.orderId}</span>
      </div>
      <div className="app-card__item">
        <span className="app-card__item-label">Date</span>
        <span>{order.orderDate}</span>
      </div>
      <div className="app-card__item">
        <span className="app-card__item-label">Status</span>
        <span className="app-l-flex-row app-l-flex-row__align-center">
          <i className="app-status-icon app-h-mr-1" style={{ backgroundColor: statusColor }}></i>{" "}
          {order.orderStatus}
        </span>
      </div>
      <div className="app-card__item">
        <span className="app-card__item-label">Game Name</span>
        <span>{order.gameName}</span>
      </div>
      <div className="app-card__item">
        <span className="app-card__item-label">Game ID</span>
        <span>{order.gameID}</span>
      </div>
      <div className="app-card__item">
        <span className="app-card__item-label">Ammount</span>
        <span>${order.amount}</span>
      </div>
    </div>
  );
}
