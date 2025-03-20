export interface Order {
  orderId: string;
  orderDate: string;
  orderStatus: string;
  gameName: string;
  gameID: string;
  amount: string;
}

export type OrderStatus = "Pending" | "Success" | "Failed";
