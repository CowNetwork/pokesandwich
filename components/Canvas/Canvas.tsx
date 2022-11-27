"use client";

import { CanvasHTMLAttributes, useEffect, useRef } from "react";

const Canvas = (props: CanvasHTMLAttributes<HTMLCanvasElement>) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const render = (context: CanvasRenderingContext2D) => {

  };

  const loop = (context: CanvasRenderingContext2D) => {
    requestAnimationFrame(() => loop(context));

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.translate(0, 0); // Viewport
    context.scale(4, 4);

    render(context);

    context.scale(1 / 4, 1 / 4);
    context.translate(-0, -0); // Viewport

    context.fillStyle = "#FFF";
    context.font = "14px JetBrains Mono Medium";
    context.fillText(`${context.canvas.width}x${context.canvas.height}`, 2, 12);
  };

  useEffect(() => {
    if (canvasRef.current === null) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    requestAnimationFrame(() => loop(context));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;