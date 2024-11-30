const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "h1Tag" }, "hey nested one")
  )
);
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World From React!!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("parent", parent);
root.render(parent);
