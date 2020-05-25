/* eslint-disable import/prefer-default-export */
import { selector } from "recoil";
import { lsValues } from "./atoms";
import { randomArray } from "../../../utils/common";

export const lsValuesSelector = selector({
  key: "linearSearchState",
  get: ({ get }) => {
    const ls = get(lsValues);
    const values = randomArray(1, ls.arraySize);
    return { ...ls, values };
  },
});
