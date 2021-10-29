import Image from 'next/image'
import imgThumb from '../../public/images/undraw_Landing_page.png'

const Card = ({ margin }) => {
    return (
        <div id="card" className={`flex flex-col bg-gray-700 ${margin} rounded-xl h-full w-full`}>
            <div id="card-thumb" className="overflow-hidden h-1/2 w-full">
              <Image src={imgThumb} className="object-contain object-center" />
            </div>
            <div id="card-content" className="flex flex-col h-1/2 w-full">
              <div id="headline" className="flex items-center justify-center h-1/3 w-full">
                <p className="text-white font-bold text-lg font-roboto-medium">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div id="desc" className="bg-gray-800 flex items-center justify-center rounded-b-xl px-4 h-full w-full">
                <p className="text-white text-sm font-roboto-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. 
                  Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, 
                  ut convallis purus eros nec massa.
                </p>
              </div>
            </div>
        </div>
    )
}

export default Card;