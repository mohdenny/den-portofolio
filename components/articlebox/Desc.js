import Copyright from "./Copyright"

const Desc = ({ data }) => {
    return (
        <div id="desc" className="flex flex-col items-center justify-center space-y-2 text-justify break-all bg-gray-800 rounded-b-xl overflow-ellipsis overflow-hidden px-4 py-4 h-2/2 w-full">
            <p className="text-white text-sm font-roboto-regular break-words">{data.explanation}</p>
            {
                data.copyright && <Copyright data={data} />
            }
        </div>
    )
}

export default Desc