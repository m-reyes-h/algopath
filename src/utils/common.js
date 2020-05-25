export function randomArray(min, max) {
  const res = [];
  for (let i = 0; i < max; i += 1) {
    res.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return res;
}

export function randomValue(max) {
  return Math.floor(Math.random() * max + 1);
}
