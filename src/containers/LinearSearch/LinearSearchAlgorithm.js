/* eslint-disable no-await-in-loop */
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

function timer(ms, times) {
  let sec = ms < 1 ? 500 : ms * 1000;
  sec /= times;
  return new Promise((res) => setTimeout(res, sec));
}

async function LinearSearchAlgorithm(config, updateConfig) {
  const { speed, target, values } = config;

  for (let i = 0, j = values.length; i < j; i += 1) {
    // set current
    const current = i;
    updateConfig({ ...config, current });

    // step 0
    if (i === 0) {
      updateConfig({ ...config, current, step: 0 });
    }
    await timer(speed, 3);

    // set step 2
    updateConfig({ ...config, current, step: 1 });
    await timer(speed, 3);

    // set step 1
    updateConfig({ ...config, current, step: 2 });

    if (values[i] === target) {
      updateConfig({ ...config, founded: true, current, step: 1 });
      return true;
    }

    // make this function (loop) to run every speed time
    await timer(speed, 3);
  }

  return false;
}

export default LinearSearchAlgorithm;
