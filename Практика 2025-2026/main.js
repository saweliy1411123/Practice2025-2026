function factorial(num) {
  if (num < 0) return -1;
  if (num === 0) return 1n;
  let result = 1n;
  for (let i = 2n; i <= num; i++) {
    result *= i;
  }
  return result;
}

function combinations(n, k) {
  if (k < 0 || k > n) {
    return 0;
  }
  return (
    factorial(BigInt(n)) / (factorial(BigInt(k)) * factorial(BigInt(n - k)))
  );
}

function calculateBernoulli(n, k, p) {
  const C_nk = combinations(n, k);
  const p_k = Math.pow(p, k);
  const q_nk = Math.pow(1 - p, n - k);
  return Number(C_nk) * p_k * q_nk;
}

let inputNumberTests = document.querySelector(".inputNumberTests");
let inputNumberSuccess = document.querySelector(".inputNumberSuccess");
let inputChanceSuccess = document.querySelector(".inputChanceSuccess");
let buttonForInputData = document.querySelector(".buttonForInputData");
let outputText = document.querySelector(".outputText");

buttonForInputData.addEventListener("click", () => {
  let n = parseFloat(inputNumberTests.value);
  let k = parseFloat(inputNumberSuccess.value);
  let p = parseFloat(inputChanceSuccess.value.replace(",", "."));

  if (
    n % 1 === 0 && // n - целое
    k % 1 === 0 && // k - целое
    n >= 0 &&
    k >= 0 &&
    k <= n &&
    p > 0 &&
    p < 1
  ) {
    const result = calculateBernoulli(n, k, p);
    outputText.textContent = `Результат: ${result.toPrecision(5)}`;
  } else {
    alert(
      "Введены неправильные данные! Убедитесь, что n и k - целые неотрицательные числа, k <= n, и p - число от 0 до 1."
    );
  }
});
