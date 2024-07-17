import './canvas.css';

function Edit({ handleColor, bgColor }) {
    
  return (
    <div className='editContainer'>
      <div className='editBlock'>
        <label htmlFor="bgColor">Background Color:</label>
        <input
          type="color"
          id="bgColor"
          value={bgColor}
          onChange={(e) => handleColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Edit;