import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Underrreacted"/>
      <About about="Personal blog by me. I explain with words and code"/>
      <ArticleList/>
    </div>
  );
}

export default App;
