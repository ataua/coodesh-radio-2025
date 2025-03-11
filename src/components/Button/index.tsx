const Button = ({ onClick, text }: { onClick: () => void, text: string | number | null }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded"
        >{text}</button>
    )
}

export default Button
