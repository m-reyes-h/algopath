import { atom } from "recoil";

const LinearSearch = atom({
  key: "linearSearch",
  default: {
    values: [],
    valueSize: 50,
    target: 1,
    speed: 1,

    // needed for UI
    current: -1,
  },
});

export default LinearSearch;
