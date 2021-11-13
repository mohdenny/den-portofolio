import Title from './Title'
import Desc from './Desc'
import Thumb from './Thumb'
import { motion } from 'framer-motion'

const ArticleBox = ({ data }) => {
    return (
        <div>
            <motion.div 
                className="border-4 flex flex-col bg-gray-700 h-full w-full rounded-xl"
                whileHover={{ 
                    scale: 1.1 , 
                    textShadow: "0px 0px 8px rgb(0, 0, 0)",
                    boxShadow: "0px 0px 8px rgb(0, 0, 0)" 
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 300 
                }}
            >
                <Thumb data={data} />
                <div id="content" className="border-4 h-full w-full">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </motion.div>
        </div>
    )
}

export default ArticleBox