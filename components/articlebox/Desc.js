const Desc = ({ data }) => {
    return (
        <div id="desc" className="flex items-center justify-center text-justify break-all bg-gray-800 rounded-b-xl overflow-ellipsis overflow-hidden px-4 py-4 h-2/2 w-full">
            <p className="text-white text-sm font-roboto-regular">{data.explanation}</p>
        </div>
    )
}

export default Desc