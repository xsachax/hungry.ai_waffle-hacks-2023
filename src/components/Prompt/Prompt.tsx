import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function Prompt() {
  const openAI_key = import.meta.env.VITE_OPENAI_API_KEY;

  const configuration = new Configuration({
    apiKey: openAI_key,
  });

  const openai = new OpenAIApi(configuration);

  const requestResponse = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How many days arenin a year?",
      temperature: 0,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
  };

  return (
    <>
      <h1 className="h-300 w-500 text-white bg-slate-800">{}</h1>
    </>
  );
}
export default Prompt;
