export function MyButton({children, onClick, buttonStyle}) {

    return(
        <button className={`${buttonStyle}`} onClick={onClick}>
            {children}
        </button>
    )
}