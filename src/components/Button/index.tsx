const intentOptions: { [key: string]: string } = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
    warning: "bg-yellow-500 hover:bg-yellow-700",
}

interface IButtonProps {
    onClick: () => void;
    text: string | number | null;
    intent?: typeof intentOptions[keyof typeof intentOptions]; // that allows extension of the object 
}

const Button = ({ onClick, text, intent = 'primary' }: IButtonProps) => {

    const buttonClass = `${intentOptions[intent]} hover:cursor-pointer text-white font-bold py-2 px-4 rounded `

    return (
        <button
            onClick={onClick}
            className={buttonClass}
        >
            {text}
        </button >
    )
}

export default Button
