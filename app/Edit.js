import "./canvas.css";
import "./Edit.css";
import { useState } from "react";
import EditColor from "./EditColor.js";
import EditText from "./EditText.js";
import EditSticker from "./EditSticker.js";

function Edit({ handleColors, colors, handleText, textSettings}) {
  const [editMode, setEditMode] = useState(1);

  let editContent;
  if (editMode == 1) {
    editContent = <EditColor handleColors={handleColors} colors={colors} />;
  } else if (editMode == 2) {
    editContent = (
      <EditText handleText={handleText} textSettings={textSettings} />
    );
  } else {
    editContent = <EditSticker />;
  }

  function handleClick(number) {
    setEditMode(number);
  }

  return (
    <div className="editContainer">
      <div className="editBlock">
        <div className="editOptions">
          <div
            className={`color ${editMode === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            color
          </div>
          <div
            className={`text ${editMode === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            text
          </div>
          <div
            className={`sticker ${editMode === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            sticker
          </div>
        </div>
        {editContent}
      </div>
    </div>
  );
}

export default Edit;
