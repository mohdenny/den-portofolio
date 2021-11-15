import Title from './Title'
import Desc from './Desc'
import Thumb from './Thumb'

const ArticleBox = ({ data }) => {
    return (
        <div>
            <div className="flex flex-col bg-gray-700 h-full w-full rounded-xl">
                <Thumb data={data} />
                <div id="content" className="h-1/3 w-full">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox