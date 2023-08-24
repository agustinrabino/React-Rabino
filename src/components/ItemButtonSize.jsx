export function ItemButtonSize({handleClickSize, sizes}) {

return(
        <div className="d-flex w-25 gap-2"> 
            <label htmlFor="size">Size:</label>
            <select onChange={(e) => handleClickSize(e.target.value)}>
                {sizes.map(s => (
                    <option key={s} value={s}>{s}</option>
                    ))}
            </select>
        </div>
)}