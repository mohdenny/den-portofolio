import dynamic from 'next/dynamic'
import Title from './Title'
import Desc from './Desc'

const LazyComponent = dynamic(() => import('./Thumb'), {
    loading: () => <p className="text-white ">loading...</p> 
})

const ArticleBox = ({ data }) => {
    return (
        <>
            <div className="flex md:flex-row flex-col items-center justify-center h-full w-full rounded-xl">
                <div className="flex h-96 w-full items-center relative justify-center">
                    <LazyComponent data={data} />
                </div>
                <div id="content" className="h-full w-full">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </div>
        </>
    )
}

export default ArticleBox