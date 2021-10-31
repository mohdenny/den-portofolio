import Link from 'next/link'

const CardTitle = ({ data }) => {
    return (
        <div id="title" className="flex items-center justify-center h-1/3 w-full">
            <p className="text-white text-xl font-roboto-medium hover:text-gray-300">
                <Link href='#'><a>{data.title}</a></Link>
            </p>
        </div>
    )
}

export default CardTitle