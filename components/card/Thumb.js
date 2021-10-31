import Image from 'next/image'

const CardThumb = ({ data }) => {
    return (
        <div id="card-thumb" className="overflow-hidden h-1/2 w-full">
          <Image src={require(`../../public/images/${data.thumb}`)} className="object-contain object-center" />
        </div>
    )
}

export default CardThumb