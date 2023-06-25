import React, { useContext } from "react";
import { Canvas } from "./Canvas.jsx";
import Prediction from "./Prediction.jsx";
import * as tf from "@tensorflow/tfjs";
const model = tf.loadLayersModel("./model/model.json");
import labels from "./labels.json";

const DrawGame = (handleClick) => {
  const ref = React.createRef();

  return (
    <div className="column m-auto border-slate-400 border-8 rounded-xl bg-gray-400">
      <Canvas ref={ref} />
      <Prediction
        theCanvas={ref}
        model={model}
        handleDrawOptionSelected={handleClick}
      />
    </div>
  );
};

export default DrawGame;
