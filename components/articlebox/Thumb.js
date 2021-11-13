import Image from 'next/image'

const Thumb = ({ data }) => {
    return (
        <>
            <div className="border-4 flex h-full w-full content-center justify-center">
                {
                    data.media_type == 'image' ?
                        <Image src={data.hdurl} height="100%" width="100%" layout="responsive" objectFit="contain" />
                    :
                    <iframe
                        title="space-video"
                        src={data.url}
                        frameBorder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowFullScreen
                        className=""
                    />
                }
            </div>
        </>
    )
}

export default Thumb