const CardTitle = ({ data }) => {
    return (
        <div id="title" className="flex items-center justify-center h-1/3 w-full">
            <p className="text-white text-xl font-poppins-medium">
                {data.title}
            </p>
        </div>
    )
}

export default CardTitle