import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";
import axios from "axios";

const ImageQuery = () => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [imageData2, setImageData2] = useState(null);
  const getImage = async () => {
    await axios
      .post(
        "http://127.0.0.1:5000/image/",
        { question: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setImageData(res.data.result.data[0].url);
        setImageData2(res.data.result.data[1].url);
        setFlag(true);
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
        <SpecialButton onClick={getImage}>Ask</SpecialButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1.5rem",
        }}
      >
        {flag === true ? <img src={imageData} alt="imageklasdlkas" /> : null}
        {flag === true ? <img src={imageData2} alt="imageklasdlkas" /> : null}
      </div>
      <div
        id="answer-container"
        style={{ position: "absolute", left: "500px", top: "250px" }}
      ></div>
    </div>
  );
};

export default ImageQuery;
