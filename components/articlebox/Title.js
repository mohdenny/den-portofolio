import Link from 'next/link'

const Title = ({ data }) => {
    return (
        <div id="title" className="flex items-center justify-center text-justify px-2 h-1/2 w-full">
            <p className="text-white text-xl font-roboto-medium hover:text-gray-300">
                <Link href='#'><a>{data.title}</a></Link>
            </p>
        </div>
    )
}

export default Title