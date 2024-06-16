const startSum = prompt('Starting sum?');
const finalSum = prompt('Final sum?');
const percent = prompt('Step income percent?');
function logBase(base, x) {
  return Math.log(x) / Math.log(base);
}

const n = logBase(1 + percent/100, finalSum / startSum);
console.log(`Need ${Math.ceil(n)} more steps`);
