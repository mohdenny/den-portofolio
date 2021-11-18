const Copyright = ({ data }) => {
    return (
        <div className="flex justify-end  w-full h-full">
            <p className="bg-gray-700 py-2 rounded-lg flex items-center w-30 h-full text-gray-300 text-xs px-4">
                Copyright: {data.copyright}
            </p>
        </div>
    )
}

export default Copyright