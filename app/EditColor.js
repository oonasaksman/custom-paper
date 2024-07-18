function EditColor ({ handleColor, bgColor, handleLineColor, lineColor}){
    return(
        <div className="editColor"> 

            <div>
                <label htmlFor="bgColor">Background Color: </label>

                <input
                type="color"
                id="bgColor"
                value={bgColor}
                onChange={(e) => handleColor(e.target.value)}
                />
            </div>

            <br></br>

            <div>
                <label htmlFor="lineColor">Line Color: </label>

                <input
                type="color"
                id="lineColor"
                value={lineColor}
                onChange={(e) => handleLineColor(e.target.value)}
                />
            </div>



        </div>
    );
}
export default EditColor;