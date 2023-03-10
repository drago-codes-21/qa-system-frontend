import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";
import "./home.css";

const ImageQuery = () => {
  const [text, setText] = useState("");
  const answerQuestion = () => {
    console.log(text);
  };
  return (
    <div
      style={{
        paddingLeft: "600px",
        paddingTop: "80px",
        width: "1000px",
      }}
    >
      <h1> Ask a Question </h1>
      <p> Type in your question and click "Ask" to get an related image: </p>
      <FormInput
        type="email"
        name="email"
        label="Image Query"
        value={text}
        handleChange={(e) => setText(e.target.value)}
        required
      />
      <div className="buttons">
        <SpecialButton onClick={answerQuestion}>Ask</SpecialButton>
        <Link to="/login">
          <SpecialButton isGoogleSignIn>Login</SpecialButton>
        </Link>
      </div>
      <div
        id="answer-container"
        style={{ position: "absolute", left: "500px", top: "250px" }}
      ></div>
    </div>
  );
};

export default ImageQuery;
