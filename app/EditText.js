import { useState } from 'react';
import './Edit.css';

function EditText({ handleText, textSettings }) {
    const [text, setText] = useState(textSettings.text);
    const [color, setColor] = useState(textSettings.color);
    const [fontSize, setFontSize] = useState(textSettings.fontSize);
    const [font, setFont] = useState(textSettings.font);
  
    const handleTextChange = (e) => {
      const newText = e.target.value;
      setText(newText);
      handleText({ text: newText, color, fontSize, font });
    };
  
    const handleColorChange = (e) => {
      const newColor = e.target.value;
      setColor(newColor);
      handleText({ text, color: newColor, fontSize, font });
    };
  
    const handleFontSizeChange = (e) => {
      const newFontSize = e.target.value;
      setFontSize(newFontSize);
      handleText({ text, color, fontSize: newFontSize, font });
    };
  
    const handleFontChange = (e) => {
      const newFont = e.target.value;
      setFont(newFont);
      handleText({ text, color, fontSize, font: newFont });
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
          <input type="number" value={fontSize} onChange={handleFontSizeChange} />
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
      </div>
    );
  }
  
  export default EditText;