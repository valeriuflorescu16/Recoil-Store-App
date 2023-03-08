export interface Item {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  item: Item;
  count: number;
}
