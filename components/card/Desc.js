const CardDesc = ({ data }) => {
    return (
        <div id="desc" className="bg-rhino-65 flex items-center justify-center px-4 py-2 h-full w-full">
            <p className="text-boulder-35 text-sm font-poppins-regular break-word text-justify">
              {data.desc}
            </p>
        </div>
    )
}

export default CardDesc