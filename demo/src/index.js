import "react";
import "react-dom";
import component from "./component";
import "./main.css";
import * as shake from "./shake";

console.log(shake.bake);

document.body.appendChild(component());
