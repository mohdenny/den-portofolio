const Copyright = ({ data }) => {
    return (
        <div className="flex justify-end  w-full h-full">
            <p className="py-1 rounded-lg flex items-center w-30 h-full text-boulder-100 font-poppins-regular text-xs px-4">
                Copyright: {data.copyright}
            </p>
        </div>
    )
}

export default Copyright