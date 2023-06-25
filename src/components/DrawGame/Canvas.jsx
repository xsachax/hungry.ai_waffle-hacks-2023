import React, { useEffect } from "react";

const Canvas = React.forwardRef((props, ref) => {
  let mouseDown = false;
  let lastX;
  let lastY;

  function drawLine(canvas, x, y, lastX, lastY) {
    const context = canvas.getContext("2d");

    context.strokeStyle = "#1f1f1f";
    context.lineWidth = 12;
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

    return [x, y];
  }

  const handleMouseup = () => {
    mouseDown = false;
    [lastX, lastY] = [undefined, undefined];
  };

  const handleMousemove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (mouseDown) {
      [lastX, lastY] = drawLine(e.target, x, y, lastX, lastY);
    }
  };

  const clearCanvas = () => {
    const context = ref.current.getContext("2d");
    context.fillRect(0, 0, 300, 300);
  };

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#f0f0f0";
    context.fillRect(0, 0, canvas.height, canvas.width);
  });

  return (
    <>
      <div className="flex border-8 border-gray-400">
        <canvas
          height={300}
          width={300}
          ref={ref}
          onMouseDown={() => (mouseDown = true)}
          onMouseUp={handleMouseup}
          onMouseMove={(e) => handleMousemove(e)}
        ></canvas>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="border border-black border-1 text-s rounded-xl px-2 mx-2 text-center bg-red-300 hover:bg-red-400"
          type="button"
          onClick={clearCanvas}
        >
          X
        </button>
      </div>
    </>
  );
});

export { Canvas };
