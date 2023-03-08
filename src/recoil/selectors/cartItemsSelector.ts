import { selector } from "recoil";
import { CartItem, Item } from "../../interfaces/ItemInterface";
import { cartItemsAtom } from "../atoms/cartItemsAtom";

export const cartItemsSelector = selector<CartItem[]>({
  key: "cartItemsSelector",
  get: ({ get }) => {
    const items = get(cartItemsAtom);

    const cartItemsMap = new Map<Item, number>();

    items.forEach((item) => {
      const itemCount = cartItemsMap.get(item) || 0;
      cartItemsMap.set(item, itemCount + 1);
    });

    const cartItems: CartItem[] = [];
    cartItemsMap.forEach((count, item) => cartItems.push({ item, count }));

    return cartItems;
  },
});
