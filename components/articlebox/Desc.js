const Desc = ({ data }) => {
    return (
        <div id="desc" className="flex items-center justify-center text-justify break-all bg-gray-800 rounded-br-xl overflow-ellipsis overflow-hidden px-2 h-1/2 w-full">
            <p className="text-white text-sm font-roboto-regular">{data.explanation}</p>
        </div>
    )
}

export default Desc