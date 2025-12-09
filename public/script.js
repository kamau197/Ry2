function calculate(type) {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let result = 0;

  if (type === 'add') result = n1 + n2;
  if (type === 'minus') result = n1 - n2;
  if (type === 'multiply') result = n1 * n2;
  if (type === 'divide') result = n1 / n2;

  document.getElementById("result").innerText = result;
}