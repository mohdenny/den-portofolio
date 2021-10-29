import Hero from '../components/hero/Hero'
import Card from '../components/card/Card'

export default function Home() {
  return (
    <>
      <Hero/>
      <main className="container mx-auto">
        <div className="py-4 px-2 h-80 w-full flex flex-row">
          <Card />
          <Card margin={'ml-4'}/>
          <Card margin={'ml-4'}/>
          <Card margin={'ml-4'}/>
        </div>
      </main>
    </>
  )
}
