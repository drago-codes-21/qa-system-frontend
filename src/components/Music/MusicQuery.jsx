import axios from "axios";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";

const MusicQuery = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const answerQuestion = async () => {
    await axios
      .post(
        "http://127.0.0.1:5000/music/",
        { question: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data);
        console.log(data);
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
      <h1> Ask a Question </h1>
      <p> Type in your question and click "Ask" to get an related music: </p>
      <FormInput
        type="text"
        name="email"
        label="Music Query"
        value={text}
        handleChange={(e) => setText(e.target.value)}
        required
      />
      <div className="buttons">
        <SpecialButton onClick={answerQuestion}>Ask</SpecialButton>
      </div>
      <div
        id="answer-container"
        style={{ position: "absolute", left: "500px", top: "250px" }}
      ></div>
    </div>
  );
};

export default MusicQuery;
