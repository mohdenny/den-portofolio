import Link from 'next/link'

const Title = ({ data }) => {
    return (
        <div id="title" className="flex items-center justify-center text-justify px-2 py-2 h-auto w-full">
            <p className="text-boulder-35 text-title-feature font-poppins-semibold font-semibold hover:text-gray-300">
                {data.title}
            </p>
        </div>
    )
}

export default Title