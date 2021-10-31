import { data } from './config'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'

const Portfolio = () => {
  return (
    <>
      <main className="container mx-auto mt-4">
        <div className="flex justify-center">
            <Header text={'Portfolio'} />
        </div>

        <div className="grid grid-cols-4 gap-4 py-4 px-2">
          { 
            data.map(item => {
              return (
                <Card key={item.id} data={item} />
              )
            })  
          }
        </div>
      </main>
    </>
  )
}

export default Portfolio