function Hoare(a, low, high) {
  let i = low;
  let j = high + 1;
  let v = a[low];

  while(true) {
    while(a[++i] < v) if (i === high) break;
    while(v < a[--j]) if (j == low) break;
    if (i >= j) break;

    // Swap a[i] with a[j]
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  // Swap a[low] with a[j]
  let tmp = a[low];
  a[low] = a[j];
  a[j] = tmp;

  return j;
}

function Lomuto(a, low, high) {

}

module.exports = {
  Hoare,
  Lomuto,
};
