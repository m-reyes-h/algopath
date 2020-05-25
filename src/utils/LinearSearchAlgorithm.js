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

function timer(ms) {
  ms *= 1000;
  return new Promise((res) => setTimeout(res, ms));
}

async function LinearSearchAlgorithm(get, target, set) {
  const { values } = get;
  let { speed } = get;

  for (let i = 0, j = values.length; i < j; i += 1) {
    const current = values[i];
    set({ ...get, current });

    console.log(current, target);

    if (current === target) {
      return true;
    }

    // convert to milliseconds

    // make this function (loop) to run every speed time
    await timer(speed);
  }

  return false;
}

export default LinearSearchAlgorithm;
