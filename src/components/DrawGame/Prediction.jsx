import React, { useEffect, useState, useContext } from "react";
import { predict } from "./helpers";

const Prediction = ({ theCanvas, model, handleClick }) => {
  const [prediction, setPrediction] = useState(""); // Sets default label to empty string.

  // checking that canvas is empty or not
  const checkCanvas = (canvas) => {
    const context = canvas.getContext("2d");

    const pixelBuffer = new Uint32Array(
      context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
    );
    return !pixelBuffer.some((color) => color !== 4294967295);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (theCanvas.current === null || checkCanvas(theCanvas.current)) {
        setPrediction("");
      } else {
        predict(theCanvas.current, model)
          .then((prediction) => {
            setPrediction(prediction);
          })
          .catch((e) => console.log("error: ", e));
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="column my-2 justify-center h-24">
      {prediction.length === 0 ? (
        <h3 className="text-black text-xl">Draw up here</h3>
      ) : (
        <>
          <h3 className="text-black text-xl">I think this is...</h3>
          <br />
          <button
            onClick={() => {
              handleClick(prediction);
            }}
            className="mx-4 border bg-slate-200 border-slate-200 rounded-xl text-center hover:bg-slate-300 pointer px-16"
          >
            <h3 className="text-black text-xl">{prediction}</h3>
          </button>
        </>
      )}
    </div>
  );
};

export default Prediction;
