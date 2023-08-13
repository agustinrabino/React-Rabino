export function Button(
    {children,
    type,
    onClick,
    buttonStyle,
    }) {

    return(
        <button
        className={`${buttonStyle}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    );
}