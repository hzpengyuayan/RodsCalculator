//计算宝箱总数
function calc(arr) {
  return eval(arr.join("+"));
}

//计算鱼竿
function calcRods(target, level, gold) {
  const total = target / (1 + 0.11 + 0.11 * 0.11)
  return total - level * 5 * 7 - (gold - level * 5 * 400) / 600
}