const Partition = require('../other/Partition');

function QuickSelect(a, low, high, k, less)
{
  if (low === high) return a[low];
  let pivot = Partition.Hoare(a, low, high, less);
  if (k === pivot) return a[k];
  if (k < pivot) return QuickSelect(a, low, pivot - 1, k, less);
  return QuickSelect(a, pivot + 1, high, k, less);
}

module.exports = QuickSelect;
