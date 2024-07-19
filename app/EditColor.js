function EditColor({ handleColors, colors }) {
  const {
    setBgColor,
    setLineColor,
    setLineWidth,
    setLineSpace,
    setLineLength,
  } = handleColors;
  const { bgColor, lineColor, lineWidth, lineSpace, lineLength } = colors;

  return (
    <div className="editColor">
      <div>
        <label htmlFor="bgColor">Background Color: </label>

        <input
          type="color"
          id="bgColor"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="lineColor">Line Color: </label>

        <input
          type="color"
          id="lineColor"
          value={lineColor}
          onChange={(e) => setLineColor(e.target.value)}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="lineWidth">Line Width: </label>
        <input
          type="number"
          id="lineWidth"
          value={lineWidth}
          min="0.1"
          max="5"
          step="0.1"
          onChange={(e) => setLineWidth(parseFloat(e.target.value))}
        />
      </div>

      <br></br>

      <div>
        <label htmlFor="lineSpace">Line Spacing: </label>
        <input
          type="number"
          id="lineSpace"
          value={lineSpace}
          min="5"
          max="300"
          step="1"
          onChange={(e) => setLineSpace(parseFloat(e.target.value))}
        />
      </div>
      <br></br>

      <div>
        <label htmlFor="lineLength">Side Space: </label>
        <input
          type="number"
          id="lineLength"
          value={lineLength}
          min="5"
          max="396"
          step="1"
          onChange={(e) => setLineLength(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
export default EditColor;
