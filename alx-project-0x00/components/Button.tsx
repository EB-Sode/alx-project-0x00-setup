
const Button: React.FC<{ title: string }> = ({ title }) => {
    return (
        <button className="bg-red-500 text text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            <p className="text-sm rounded-sm">{title}</p>
            <p className="text-md rounded-md">{title}</p>
            <p className="text-lg rounded-full">{title}</p>
        </button>
    )
}

export default Button;