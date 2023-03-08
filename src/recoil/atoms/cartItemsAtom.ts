import { atom, RecoilState } from "recoil";
import { Item } from "../../interfaces/ItemInterface";

export const cartItemsAtom: RecoilState<Item[]> = atom({
  key: "cartItemsState",
  default: [] as Item[],
});
