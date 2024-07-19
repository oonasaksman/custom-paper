import { useState } from "react";
import "./Edit.css";

function EditText({ handleText, textSettings }) {
  const [text, setText] = useState(textSettings.text);
  const [color, setColor] = useState(textSettings.color);
  const [fontSize, setFontSize] = useState(textSettings.fontSize);
  const [font, setFont] = useState(textSettings.font);
  const [angle, setAngle] = useState(textSettings.angle);
  const [x, setX] = useState(textSettings.x);
  const [y, setY] = useState(textSettings.y);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    handleText({ text: newText, color, fontSize, font, angle, x, y });
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    handleText({ text, color: newColor, fontSize, font, angle, x, y });
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = e.target.value;
    setFontSize(newFontSize);
    handleText({ text, color, fontSize: newFontSize, font, angle, x, y });
  };

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    setFont(newFont);
    handleText({ text, color, fontSize, font: newFont, angle, x, y });
  };

  const handleAngleChange = (e) => {
    const newAngle = e.target.value;
    setAngle(newAngle);
    handleText({ text, color, fontSize, font, angle: newAngle, x, y });
  };

  const handleXChange = (e) => {
    const newX = e.target.value;
    setX(newX);
    handleText({ text, color, fontSize, font, angle, x: newX, y });
  };

  const handleYChange = (e) => {
    const newY = e.target.value;
    setY(newY);
    handleText({ text, color, fontSize, font, angle, x, y: newY });
  };

  return (
    <div className="editText">
      <div>
        <label>Text: </label>
        <input type="text" value={text} onChange={handleTextChange} />
      </div>
      <br></br>
      <div>
        <label>Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
      <br></br>
      <div>
        <label>Font Size: </label>
        <input className="font-size" type="number" value={fontSize} onChange={handleFontSizeChange} />
      </div>
      <br></br>
      <div>
        <label>Font: </label>
        <select value={font} onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
      </div>
      <br></br>
      <div>
        <label>Text Angle: </label>
        <input className="font-angle" type="number" value={angle} onChange={handleAngleChange} />
      </div>
      <br></br>
      <div>
        <div>Text coordinates</div>
        <label>x: </label>
        <input className="x-axis" type="number" step="5" value={x} onChange={handleXChange} />
        <label>y: </label>
        <input className="y-axis" type="number" step="5" value={y} onChange={handleYChange} />
      </div>
    </div>
  );
}

export default EditText;
