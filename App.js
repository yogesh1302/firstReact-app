

/*
<div id = "parent">
<div id = "child">
<h1i am H1 tag </h1>
<h2>I am H2 tag</h2>
</div>

</div>

*/
// ...existing code...
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{ id :"heading", xyz : "abc"},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// ...existing code...