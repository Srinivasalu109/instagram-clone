import React, { useState, useEffect } from "react";
import Followers from "../../Components/HomeComponents/Followers";
import Post from "../../Components/HomeComponents/Post";
import Suggestions from "../../Components/HomeComponents/Suggestions";
import "../../Styles/App.css";
function Home() {
  return (
    <div className="App">
      <div className="section-2">
        <div className="follwers_post">
          <Followers />
          <Post />
        </div>
        <div className="suggestions">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default Home;
