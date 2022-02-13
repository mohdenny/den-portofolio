import Copyright from "./Copyright"

const Desc = ({ data }) => {
    return (
        <div id="desc" className="flex flex-col items-center justify-center space-y-2 text-justify break-words rounded-b-xl overflow-ellipsis overflow-hidden px-4 py-4 h-full w-full">
            <p className="text-boulder-65 text-paragraph font-poppins-regular">{data.explanation}</p>
            {
                data.copyright && <Copyright data={data} />
            }
        </div>
    )
}

export default Desc