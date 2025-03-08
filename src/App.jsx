import React from "react";
import Create from "../src/components/Create";
import Edit from "../src/components/Edit";
import List from "../src/components/List";
import Post from "../src/components/Post";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <h1 className="bg-info">Blog</h1>
      <p class="roboto-mono">Test</p> */}
      <List />
    </div>
  );
};

export default App;
