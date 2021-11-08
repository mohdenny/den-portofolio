const CardDesc = ({ data }) => {
    return (
        <div id="desc" className="bg-gray-700 flex items-center justify-center px-4 h-full w-full">
            <p className="text-white text-sm font-roboto-regular break-all">
              {data.desc}
            </p>
        </div>
    )
}

export default CardDesc