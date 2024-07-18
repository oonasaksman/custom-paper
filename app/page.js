"use client";
import React, { useRef, useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./canvas.css";
import Edit from "./Edit.js";

export default function Home() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [lineColor, setLineColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(0.3);
  const [lineSpace, setLineSpace] = useState(40);
  const [lineLength, setLineLength] = useState(45);
  const [textSettings, setTextSettings] = useState({ text: '', color: '#000000', fontSize: 20, font: 'Arial' });
  const canvasRef = useRef(null);

  useEffect(() => {
    drawLines();
  }, [bgColor, lineColor, lineWidth, lineSpace, lineLength, textSettings]);

  const handleColors = {
    setBgColor,
    setLineColor,
    setLineWidth,
    setLineSpace,
    setLineLength
  };

  function handleText(settings) {
    setTextSettings(settings);
  }

  const drawLines = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const lineHeight = lineSpace; // distance between lines
    const lineStart = 60;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    //draw text
    context.font = `${textSettings.fontSize}px ${textSettings.font}`;
    context.fillStyle = textSettings.color;
    context.fillText(textSettings.text, 50, 120); // Position the text at (50, 100)

    // Draw lines
    context.strokeStyle = lineColor; // color of the lines
    context.lineWidth = lineWidth;
    for (let y = lineStart; y < canvas.height - 50; y += lineHeight) {
      context.beginPath();
      context.moveTo(lineLength, y); //first number where begins
      context.lineTo(canvas.width - lineLength, y);
      context.stroke();
    }

  };

  const handleDownloadPdf = () => {
    const input = canvasRef.current;

    html2canvas(input, {
      useCORS: true,
      scale: 3,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("letterpaper.pdf");
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Letter Paper Customizer </h2>
        <img src="loveletter.png" className="loveletter"></img>
      </div>

      <div className="pageEditContainer">
        <Edit
          handleColors={handleColors} 
          colors={{ bgColor, lineColor, lineWidth, lineSpace, lineLength }}
          handleText={handleText}
          textSettings={textSettings}
        ></Edit>
        <div className="canvasContainer">
          <canvas
            ref={canvasRef}
            width={210 * 3.78} // A4 width in mm to pixels (1 mm = 3.78 pixels)
            height={297 * 3.78} // A4 height in mm to pixels
            className="canvas"
          ></canvas>
        </div>
      </div>

      <button className="download" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
    </div>
  );
}
