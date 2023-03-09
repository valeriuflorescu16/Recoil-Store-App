import { atom, RecoilState } from "recoil";
import { Item } from "../../interfaces/ItemInterface";

export const itemsAtom: RecoilState<Item[]> = atom({
  key: "itemsState",
  default: [] as Item[],
});
