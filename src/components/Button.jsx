export function Button(
    {children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) {

    return(
        <button
        className={`${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    );
}