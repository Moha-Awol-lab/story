import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

var name = "Mohammed";
var name2 = "Awol";
var age = 23;
const now = new Date().getFullYear();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <h1 className="head" contentEditable="true" spellCheck="false">
      {name} {name2}
    </h1>
    <ul>
      <li>here i am insha allah i will be the {age} of the year 2025</li>
      <li>my lucky number is {Math.floor(Math.random() * 10)}</li>
      <li className="head">today is {now} </li>
    </ul>
    <p className="custom"> noodles </p>
    <img src="https://picsum.photos/seed/picsum/200/300" />
  </div>
);
