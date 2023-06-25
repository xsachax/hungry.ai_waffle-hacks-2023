import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Canvas } from "../DrawGame/Canvas.jsx";
import Prediction from "../DrawGame/Prediction.jsx";
import Result from "../Result/Result.tsx";
import "./Hero.css";
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import loading from "../../assets/loading.gif";

import * as tf from "@tensorflow/tfjs";
const model = tf.loadLayersModel("./model/model.json");
const ref = React.createRef();

function Hero() {
	const [response, setResponse] = useState([]);
	const [showingResponse, setShowingResponse] = useState(false);
	const [showingResponseTrigger, setShowingResponseTrigger] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [fieldValue, setFieldValue] = useState("");
	const [keyWords, setKeyWords] = useState<string>([]); // [Pizza, Fast-food, ~15$...
	const [showDraw, setShowDraw] = useState(true);
	const [showBack, setShowBack] = useState(false);
	const [showGenerate, setShowGenerate] = useState(true);
	const [progress, setProgress] = useState(0);

	const fillerWords = [
		"Give me the best places to eat ",
		" that are ",
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
	delete configuration.baseOptions.headers["User-Agent"];
	const openai = new OpenAIApi(configuration);

	async function generatePrompt() {
		let newPrompt = "";
		for (let i = 0; i < keyWords.length; i++) {
			newPrompt += fillerWords[i] + keyWords[i].toLowerCase();
		}
		(newPrompt +=
			". Format the answer in a one-line json as a numbered list where each restaurant has a name, address, website, review around 150 characters, and rating out of 10. Give me 3 options."),
			console.log(newPrompt);
		requestResponse(newPrompt);
	}

	async function requestResponse(p) {
		const apiBody = {
			model: "text-davinci-003",
			prompt: p,
			temperature: 0,
			max_tokens: 900,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		};

		await fetch("https://api.openai.com/v1/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${openAI_key}`,
			},
			body: JSON.stringify(apiBody),
		})
			.then((d) => {
				return d.json();
			})
			.then((d) => {
				setShowingResponse(true);
				setResponse(d.choices[0].text.trim());
			});
	}

	const goBack = () => {
		setCurrentQuestion(currentQuestion - 1);
		setFieldValue("");
		setKeyWords([...keyWords.slice(0, -1)]);
		if (currentQuestion == 1) {
			setShowDraw(true);
			setShowBack(false);
		}
		setProgress(progress - 25);
	};

	const resetRequest = () => {
		setShowingResponse(false);
		setShowingResponseTrigger(false);
		setCurrentQuestion(0);
		setFieldValue("");
		setKeyWords([]);
		setPrompt("");
		setShowDraw(true);
		setShowBack(false);
		setProgress(0);
		setShowGenerate(true);
	};

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
		setShowBack(true);
		setShowDraw(false);
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowingResponseTrigger(true);
		}
		setProgress(progress + 25);
	};

	const handleDrawOptionSelected = (prediction) => {
		setKeyWords([...keyWords, prediction]);
		handleAnswerOptionClick();
	};

	return (
		<>
			<div className=''>
				<div className='displayCanvas border-slate-600 border-8 rounded-xl bg-slate-500 m-4'>
					<div className='content flex w-full h-full p-8 justify-center items-center'>
						{showingResponse ? (
							<>
								<div className='response'>
									<div className='promptText'></div>
									<div className='content'>
										{<Result data={response == [] ? null : response} />}
									</div>
								</div>
							</>
						) : (
							<>
								<div className='calculating block'>
									{showDraw ? (
										<div className='column m-auto border-slate-400 border-8 rounded-xl bg-gray-400'>
											<Canvas ref={ref} />
											<Prediction
												theCanvas={ref}
												model={model}
												handleClick={handleDrawOptionSelected}
											/>
										</div>
									) : (
										<div className='calculateText h-96'>
											<CircularProgressbarWithChildren
												className='progressbar flex align-center justify-center h-96'
												value={progress}
												styles={buildStyles({
													strokeLinecap: "round",
													textSize: "16px",
													pathTransitionDuration: 0.5,
													pathColor: `rgba(255, 212, 105, ${progress / 100})`,
													textColor: "#f88",
													trailColor: "#d6d6d6",
													backgroundColor: "#3e98c7",
												})}
											>
												<img
													style={{
														width: 200,
														marginTop: -60,
														marginRight: 30,
													}}
													src={loading}
													alt='loading'
												/>
											</CircularProgressbarWithChildren>
										</div>
									)}
								</div>
							</>
						)}
					</div>
				</div>
				<div className='optionSelector mx-auto m-4 justify-center rounded-xl bg-slate-500 border-8 border-slate-600 px-10 py-4'>
					{showingResponseTrigger ? (
						<div className='flex answer-buttons flex-wrap justify-center'>
							{showGenerate ? (
								<button
									className='flex border bg-slate-200 border-slate-200 rounded-xl h-12 hover:bg-slate-300 m-1 px-8 items-center justify-center'
									type='button'
									onClick={() => {
										generatePrompt();
										setShowGenerate(false);
									}}
								>
									Generate
								</button>
							) : (
								<></>
							)}

							<button
								className='flex border bg-slate-200 border-slate-200 rounded-xl h-12 hover:bg-slate-300 m-1 px-8 items-center justify-center'
								type='button'
								onClick={resetRequest}
							>
								X
							</button>
						</div>
					) : (
						<>
							<div className='question-section rounded-md'>
								<div className='question-text my-4 border-2 h-10 p-2 '>
									{questions[currentQuestion].questionText}
								</div>
								<ul className='flex answer-buttons flex-wrap justify-center m-auto'>
									{questions[currentQuestion].answerOptions.map(
										(answerOption) => {
											return (
												<li key={answerOption.answerText}>
													<button
														className='flex border bg-slate-200 border-slate-200 rounded-xl h-12 hover:bg-slate-300 m-1 px-8 items-center justify-center'
														type='button'
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

								<div className='flex my-2 h-12 gap-2 justify-center flex-wrap'>
									{showBack ? (
										<button
											className='Bouton border border-black border-1 rounded-xl px-6 text-center h-12 bg-red-300 hover:bg-red-400'
											type='button'
											onClick={goBack}
										>
											Back
										</button>
									) : (
										<></>
									)}
									<input
										type='text'
										id='customAnswer'
										value={fieldValue}
										placeholder='Custom answer: '
										className='border border-black border-1 rounded-xl text-center py-2 px-2'
										onChange={(e) => {
											setFieldValue(e.target.value);
										}}
									></input>
									<button
										type='button'
										className='Bouton-submit border border-black border-1 rounded-xl px-6 text-center h-12 bg-green-300 hover:bg-green-400'
										onClick={() => {
											setKeyWords([
												...keyWords,
												fieldValue != "" ? fieldValue : "Food",
											]);
											setFieldValue("");
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
export default Hero;
