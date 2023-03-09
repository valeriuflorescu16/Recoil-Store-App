import { selector } from "recoil";
import { CartItem, Item } from "../../interfaces/ItemInterface";
import { itemsAtom } from "../atoms/itemsAtom";

export const cartItemsSelector = selector<CartItem[]>({
  key: "cartItemsSelector",
  get: ({ get }) => {
    const items = get(itemsAtom);

    const cartItemsMap = new Map<Item, number>();

    items.forEach((item) => {
      const itemCount = cartItemsMap.get(item) || 0;
      cartItemsMap.set(item, itemCount + 1);
    });

    const cartItems: CartItem[] = [];
    cartItemsMap.forEach((count, item) => cartItems.push({ item, count }));

    cartItems.sort((a, b) => a.item.price - b.item.price);

    return cartItems;
  },
});
