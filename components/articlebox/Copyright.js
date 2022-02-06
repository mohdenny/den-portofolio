const Copyright = ({ data }) => {
    return (
        <div className="flex justify-end  w-full h-full">
            <p className="bg-rhino-100 py-1 rounded-lg flex items-center w-30 h-full text-gray-300 font-poppins-regular text-xs px-4">
                Copyright: {data.copyright}
            </p>
        </div>
    )
}

export default Copyright