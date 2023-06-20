import { Calculator } from "./calculator";

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function setupButtons() {
  document.getElementById("add").addEventListener("click", function () {
    Calculator.calculate("x", "y", "add");
  });
  document.getElementById("sub").addEventListener("click", function () {
    Calculator.calculate("x", "y", "sub");
  });
  document.getElementById("mul").addEventListener("click", function () {
    Calculator.calculate("x", "y", "mul");
  });
  document.getElementById("div").addEventListener("click", function () {
    Calculator.calculate("x", "y", "div");
  });
}
