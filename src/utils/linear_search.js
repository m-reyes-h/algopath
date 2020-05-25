import React from "react";
import { useRecoilState } from "recoil";
import linearSearchAtom from "../state/linearSearch";

// linear search
// iterate across of the array from left to right, searching forspecified element.
// Pseudocode:
//* Repeat, starting at the first element:
//  * if the first element is what you're looking for (the target), stop;
//  * otherwis, move to the next element.

// function linearSearch(arr, target) {
//   for (let i = 0, j = arr.length; i < j; i += 1) {
//     if (arr[i] === target) {
//       return true;
//     }
//   }

//   return false;
// }

// Example
// let linearArr = [2, 4, 6, 7, 12, 8, 5, 0, 1]
// const target = 0
// linearSearch(linearArr, target)

function LinearSearch() {
  const [rState, setRState] = useRecoilState(linearSearchAtom);
  const { values, target } = rState;

  for (let i = 0, j = values.length; i < j; i += 1) {
    const current = values[i];
    setRState({ ...rState, current });

    if (current === target) {
      return true;
    }
  }

  return false;
}

export default LinearSearch;
