import React from "react";
import ReactDOM from "react-dom/client";

const headingUsingReact = React.createElement(
  "h1",
  { id: "heading" },
  "Namasthe React"
);

// JSX code
const headingusingJSX = <h1 id="heading">Namasthe React....</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingusingJSX);
