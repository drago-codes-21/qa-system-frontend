import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import SpecialButton from "../SpecialButton/SpecialButton";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [domainArr, setDomainArr] = useState([]);
  const answerQuestion = async () => {
    await axios
      .post(
        "http://127.0.0.1:5000/question/",
        { question: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data.result[0]);
        setDomainArr(res.data.domain);
        console.log(res);
      });
  };
  const answerQuestionDetails = async () => {
    await axios
      .post(
        "http://127.0.0.1:5000/question/details/",
        { question: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data.result[0]);
        console.log(res);
      });
  };
  const answerQuestionDomain = async (domain) => {
    setText(text.concat(" in ").concat(domain));
    await axios
      .post(
        "http://127.0.0.1:5000/question/",
        { question: text },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data.result[0]);
        setDomainArr(res.data.domain);
        console.log(res);
      });
  };
  return (
    <div
      style={{
        paddingLeft: "400px",
        paddingTop: "20px",
        width: "1000px",
      }}
    >
      <h1
        style={{
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
        {data !== null ? (
          <SpecialButton onClick={answerQuestionDetails} isGoogleSignIn>
            More Info{" "}
          </SpecialButton>
        ) : null}
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
      {domainArr.length > 0 &&
        domainArr.map((domain) => {
          return (
            <button
              className="ui green button"
              onClick={() => answerQuestionDomain(domain)}
            >
              {domain}
            </button>
          );
        })}
    </div>
  );
};

export default Home;

/* 
"He is a right-handed batsman and occasional right-arm medium pace bowler. He is regarded as one of the best batsmen in the world and is also known for his aggressive batting style, fitness, and work ethic."

"He has scored the most runs in a single One Day International (ODI) innings, the fastest century in ODI cricket and the fastest half-century in ODI cricket. He is the only batsman in the world to have scored more than 10,000 ODI runs in a single calendar year. He is also the first batsman to score three double centuries in ODIs. He is considered to be one of the best batsmen in the world and is widely regarded as one of the greatest batsmen of all time."


*/
