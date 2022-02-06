const CardTitle = ({ data }) => {
    return (
        <div id="title" className="flex items-center justify-center h-auto w-full">
            <p className="text-boulder-65 text-title-feature py-2 px-2 text-center font-semibold font-poppins-semibold">
                {data.title}
            </p>
        </div>
    )
}

export default CardTitle