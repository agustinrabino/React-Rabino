export function ItemButtonSize({handleClickSize, sizes}) {

return(
        <div className="d-flex w-25 gap-2"> 
            <label htmlFor="size">Size:</label>
            <select onChange={(e) => handleClickSize(JSON.parse(e.target.value))}>
                {sizes.map(s => (
                    <option key={s.size} value={JSON.stringify(s)}>{s.size}</option>
                    ))}
            </select>
        </div>
)}