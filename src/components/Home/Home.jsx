import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="ui cards"
      style={{ paddingLeft: "240px", paddingTop: "170px" }}
    >
      <div className="card" style={{ padding: "20px" }}>
        <div className="content">
          <h1
            style={{
              fontFamily: "Open Sans Condensed",
              fontWeight: "bolder",
            }}
          >
            Text Query
          </h1>
          <div className="description">
            You can search here for any kind of question answers
          </div>
        </div>
        <Link to="/text-query" className="ui blue button">
          <button style={{ fontFamily: "Open Sans Condensed" }}>Search</button>
        </Link>
      </div>
      <div className="card" style={{ padding: "20px" }}>
        <div className="content">
          <h1
            style={{
              fontFamily: "Open Sans Condensed",
              fontWeight: "bolder",
            }}
          >
            Image Query
          </h1>
          <div className="description">
            Search for relatable images based on your query
          </div>
        </div>
        <Link to="/home" className="ui red button">
          <button style={{ fontFamily: "Open Sans Condensed" }}>Search</button>
        </Link>
      </div>
      <div className="card" style={{ padding: "20px" }}>
        <div className="content">
          <h1
            style={{
              fontFamily: "Open Sans Condensed",
              fontWeight: "bolder",
            }}
          >
            Music Query
          </h1>
          <div className="description">
            Search for relatable Music based on your query
          </div>
        </div>
        <Link to="/home" className="ui green button">
          <button style={{ fontFamily: "Open Sans Condensed" }}>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
