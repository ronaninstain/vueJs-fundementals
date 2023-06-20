import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { setupButtons } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Everyone!</h1>
    <div class="...">
    <input id="x" class="..." type="text">
    <button id="add" type="button">+</button>
    <button id="sub" type="button">-</button>
    <button id="mul" type="button">x</button>
    <button id="div" type="button">/</button>
    <input id="y" type="text">
    =
    <input id="result" class="" type="text">
  </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
setupButtons(document.querySelector("#add"));
setupButtons(document.querySelector("#sub"));
setupButtons(document.querySelector("#mul"));
setupButtons(document.querySelector("#div"));
