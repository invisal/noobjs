function swap(a, i, k) {
  let t = a[i];
  a[i] = a[k];
  a[k] = t;
}

function Hoare(a, low, high) {
  let i = low;
  let j = high + 1;
  let v = a[low];

  while(true) {
    while(a[++i] < v) if (i === high) break;
    while(v < a[--j]) if (j == low) break;
    if (i >= j) break;

    swap(a, i, j);
  }

  swap(a, low, j);
  return j;
}

function Lomuto(a, low, high) {
  let v = a[high];
  let i = low - 1;
  for(let j = low; j < high; j++)
    if (a[j] <= v) swap(a, ++i, j);
  swap(a, ++i, high);
  return i;
}

module.exports = {
  Hoare,
  Lomuto,
};
