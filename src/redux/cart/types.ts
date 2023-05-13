export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  price: number;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}