import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const answerQuestion = async () => {
    let raw = JSON.stringify(text);
    await axios
      .get(
        "http://localhost:5000/question",
        { data: raw },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        setData(result.data);
      });
  };
  return (
    <div
      style={{
        paddingLeft: "400px",
        paddingTop: "80px",
        width: "1000px",
      }}
    >
      <h1
        style={{
          fontFamily: "Open Sans Condensed",
          fontWeight: "bolder",
        }}
      >
        Ask a Question
      </h1>
      <p>Type in your question and click "Ask" to get an answer:</p>
      <FormInput
        type="text"
        name="text"
        label="Query"
        value={text}
        handleChange={(e) => setText(e.target.value)}
        required
      />
      <div className="buttons">
        <SpecialButton onClick={answerQuestion}>Ask</SpecialButton>
      </div>
      <div class="ui message">
        <h1
          style={{
            fontFamily: "Open Sans Condensed",
            fontWeight: "bolder",
          }}
        >
          Answer to your query is :
        </h1>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default Home;
