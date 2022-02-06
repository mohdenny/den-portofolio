import dynamic from 'next/dynamic'
import Title from './Title'
import Desc from './Desc'

const LazyComponent = dynamic(() => import('./Thumb'), {
    loading: () => <p className="text-white ">loading...</p> 
})

const ArticleBox = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col bg-rhino-100 h-full w-full rounded-xl">
                <div className="flex h-96 w-full content-center relative justify-center">
                    <LazyComponent data={data} />
                </div>
                <div id="content" className="h-1/3 w-full">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox