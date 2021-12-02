import Image from 'next/image'

const CardThumb = ({ data }) => {
    return (
        <div id="card-thumb" className="rounded-t-xl overflow-hidden h-full w-full relative">
          <Image src={require(`../../public/images/${data.thumb}`)} objectFit="cover" layout="fill" />
        </div>
    )
}

export default CardThumb