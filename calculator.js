function appendInput(value) {
  const inputField = document.getElementById('input');
  inputField.value += value;
}

function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').textContent = '';
}

function calculate() {
  const inputField = document.getElementById('input');
  const outputField = document.getElementById('output');
  try {
    let expression = inputField.value.replace('^', '**');
    const result = eval(expression); // Use with caution in real-world applications
    outputField.textContent = `Result: ${result}`;
  } catch (error) {
    outputField.textContent = 'Error: Invalid expression';
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function calculateCombination() {
  const inputField = document.getElementById('input').value;
  const [n, r] = inputField.split(',').map(Number);
  const outputField = document.getElementById('output');
  if (n >= r && n >= 0 && r >= 0) {
    const result = factorial(n) / (factorial(r) * factorial(n - r));
    outputField.textContent = `nCr Result: ${result}`;
  } else {
    outputField.textContent = 'Error: Invalid inputs for nCr';
  }
}

function calculatePermutation() {
  const inputField = document.getElementById('input').value;
  const [n, r] = inputField.split(',').map(Number);
  const outputField = document.getElementById('output');
  if (n >= r && n >= 0 && r >= 0) {
    const result = factorial(n) / factorial(n - r);
    outputField.textContent = `nPr Result: ${result}`;
  } else {
    outputField.textContent = 'Error: Invalid inputs for nPr';
  }
}

function calculateDerivative() {
  const inputField = document.getElementById('input').value;
  const outputField = document.getElementById('output');
  const h = 0.00001; // Small step for numerical differentiation
  const x0 = parseFloat(prompt('Enter the value of x for differentiation:'));
  if (!isNaN(x0)) {
    const f = (x) => eval(inputField.replace(/x/g, `(${x})`));
    const derivative = (f(x0 + h) - f(x0 - h)) / (2 * h);
    outputField.textContent = `Derivative at x=${x0}: ${derivative}`;
  } else {
    outputField.textContent = 'Error: Invalid input for differentiation';
  }
}
