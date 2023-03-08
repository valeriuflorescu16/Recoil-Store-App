import { atom, RecoilState } from "recoil";

export const animateAtom: RecoilState<boolean> = atom({
  key: "animateState",
  default: false,
});
