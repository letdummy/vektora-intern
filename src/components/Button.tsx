function Button({ text, isReverse }: { text: string, isReverse: boolean }) {
    return (
        <>
            <button className={`rounded-md ${isReverse ? 'text-blue-400 hover:text-white hover:border-white hover:bg-blue-400 hover:border border-blue-400 border' : 'bg-orange-600 hover:text-orange-600 text-white hover:border-orange-600 hover:bg-white hover:border border border-transparent'} w-fit py-3 px-7 font-bold transition`}>
                {text}
            </button>
        </>
    )
}

export default Button;
