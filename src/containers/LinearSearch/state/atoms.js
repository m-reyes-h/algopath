import { atom } from "recoil";

export const lsValues = atom({
  key: "lsValues",
  default: {
    values: [],
    arraySize: 10,
  },
});

export const lsConfig = atom({
  key: "lsConfig",
  default: {
    target: 1,
    speed: 1,

    // needed for UI
    current: -1,
  },
});
