import Image from 'next/image'

const Thumb = ({ data }) => {
    return (
        <>
            <div className="flex h-96 w-full content-center relative justify-center">
                {
                    data.media_type == 'image' ?
                        <Image src={data.hdurl} layout="fill" objectFit="cover" />
                    :
                    <iframe
                        title="space-video"
                        src={data.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className="h-full w-full"
                    />
                }
            </div>
        </>
    )
}

export default Thumb