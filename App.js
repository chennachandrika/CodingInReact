const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1Tag", key: "h1" }, "hey nested one"),
    React.createElement("h2", { id: "h1Tag", key: "h2" }, "hey h2 tag"),
  ])
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
