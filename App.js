

/*
<div id = "parent">
<div id = "child">
<h1i am H1 tag </h1>
<h2>I am H2 tag</h2>
</div>

</div>

*/
const parent = React.createElement("div",{id : "parent"},
     React.createElement("div",{id : "child"},React.createElement("h1",{},"I am h1 tag")));
     console.log(parent);
//const heading = React.createElement("h1",{ id :"heading", xyz : "abc"},"Hello World from Reactr");
    const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);