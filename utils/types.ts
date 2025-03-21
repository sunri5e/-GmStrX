export interface Order {
  orderId: string;
  orderDate: string;
  orderStatus: string;
  gameName: string;
  gameID: string;
  amount: string;
}

export type OrderStatus = "Pending" | "Success" | "Failed";

export type AuthType = "login" | "signUp";

export type DropdownItem = {
  value: string;
  label: string;
  image: string;
};
