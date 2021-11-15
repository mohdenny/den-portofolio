import dynamic from 'next/dynamic'
import Title from './Title'
import Desc from './Desc'

const LazyComponent = dynamic(() => import('./Thumb'), {
    loading: () => <p>loading...</p> 
})

const ArticleBox = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col bg-gray-700 h-full w-full rounded-xl">
                    <LazyComponent data={data} />
                <div id="content" className="h-1/3 w-full">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox