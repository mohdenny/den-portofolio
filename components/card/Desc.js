const CardDesc = ({ data }) => {
    return (
        <div id="desc" className="bg-gray-700 flex items-center justify-center px-4 py-2 h-full w-full">
            <p className="text-white text-sm font-roboto-regular break-word text-justify">
              {data.desc}
            </p>
        </div>
    )
}

export default CardDesc