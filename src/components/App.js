import React from "react";
import Article from "./Article";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import DecadeReview from "./MinutesToRead";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

      <Header blog={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <DecadeReview date={blogData.date} />
    </div>
  );
}

export default App;