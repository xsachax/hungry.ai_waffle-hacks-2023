import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function Prompt() {
  //const [response, setResponse] = useState("");
  const [showingResponse, setShowingResponse] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [fieldValue, setFieldValue] = useState("");
  const [keyWords, setKeyWords] = useState([]); // [Pizza, Fast-food, ~15$...
  const [prompt, setPrompt] = useState("");

  const fillerWords = [
    "Give me the top 3 best places to eat ",
    " that are  ",
    ", where the price per plate is ",
    " in downtown ",
  ];
  const questions = [
    {
      questionText: "What kinda food do you want?",
      answerOptions: [
        { answerText: "Pizza" },
        { answerText: "Sushi" },
        { answerText: "Burgers" },
        { answerText: "Salad" },
        { answerText: "Anything" },
      ],
    },
    {
      questionText: "What's the vibe?",
      answerOptions: [
        { answerText: "Take-out" },
        { answerText: "Sit down" },
        { answerText: "Specialty dining" },
        { answerText: "Anything" },
      ],
    },
    {
      questionText: "How much are you willing to pay per person?",
      answerOptions: [
        { answerText: "~15$" },
        { answerText: "~25$" },
        { answerText: "~35$+" },
        { answerText: "anything" },
      ],
    },
    {
      questionText: "In which city are you located?",
      answerOptions: [
        { answerText: "Ottawa" },
        { answerText: "Montreal" },
        { answerText: "Toronto" },
        { answerText: "Vancouver" },
      ],
    },
  ];

  const openAI_key = import.meta.env.VITE_OPENAI_API_KEY;
  const configuration = new Configuration({
    apiKey: openAI_key,
  });
  const openai = new OpenAIApi(configuration);

  const testRequestResponse = () => {
    let newPrompt = "";
    for (let i = 0; i < keyWords.length; i++) {
      newPrompt += fillerWords[i] + keyWords[i].toLowerCase();
    }
    setPrompt(newPrompt);
  };

  /*
  const requestResponse = async () => {
    const answer = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How many days are in a year?",
      temperature: 0,
      max_tokens: 5,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    setResponse(answer.data.choices[0].text);
  };
  */

  const resetRequest = () => {
    setShowingResponse(false);
    setCurrentQuestion(0);
    setFieldValue("");
    setKeyWords([]);
    setPrompt("");
  };

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowingResponse(true);
    }
    console.log("clicked");
  };

  return (
    <>
      <div className="w-full">
        <div className="displayCanvas border-gray-200 border-8 rounded-xl bg-gray-100 h-96 m-4">
          <div className="content flex w-full h-full p-8 justify-center items-center">
            {showingResponse ? (
              <>
                <div className="promptText">{prompt}</div>
              </>
            ) : (
              <>
                <div className="calculating text-3xl font-thin">...</div>
              </>
            )}
          </div>
        </div>
        <div className="optionSelector w-11/12 mx-auto my-4 justify-center rounded-xl bg-gray-100 px-10 py-4">
          {showingResponse ? (
            <div className="flex answer-buttons flex-wrap justify-center">
              <button
                className="flex border border-black rounded-lg h-16 hover:bg-slate-200 m-1 px-6 items-center justify-center"
                type="button"
                onClick={() => {
                  testRequestResponse();
                }}
              >
                Show Request
              </button>
              <button
                className="flex border border-black rounded-lg h-16 hover:bg-slate-200 m-1 px-6 items-center justify-center"
                type="button"
                onClick={resetRequest}
              >
                X
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-text my-4">
                  {questions[currentQuestion].questionText}
                </div>
                <ul className="flex answer-buttons flex-wrap justify-center m-auto">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => {
                      return (
                        <li key={answerOption.answerText}>
                          <button
                            className="flex border border-black rounded-lg h-16 hover:bg-slate-200 m-1 px-8 items-center justify-center"
                            type="button"
                            onClick={() => {
                              setKeyWords([
                                ...keyWords,
                                answerOption.answerText,
                              ]);
                              handleAnswerOptionClick();
                            }}
                          >
                            {answerOption.answerText}
                          </button>
                        </li>
                      );
                    }
                  )}
                </ul>

                <div className="flex my-2 justify-center h-16 gap-2">
                  <input
                    type="text"
                    placeholder="Custom answer: "
                    className="border border-black border-1 rounded-xl text-center py-8 px-2"
                    onChange={() => {
                      setFieldValue(value);
                    }}
                  ></input>
                  <button
                    type="button"
                    className="border border-black border-1 rounded-xl px-6 text-center h-16 hover:bg-slate-200"
                    onClick={() => {
                      setKeyWords([
                        ...keyWords,
                        fieldValue != "" ? fieldValue : "Food",
                      ]);
                      handleAnswerOptionClick();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Prompt;
