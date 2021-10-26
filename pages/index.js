import Head from 'next/head'
import Navbar from '../comps/Navbar'
import '../styles/tailwind.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>mohdenny | Home</title>
        <meta name="keywords" content="Mohdenny Portofolio"/>
      </Head>

      <Navbar/>

      <main className="container">
        
      </main>
    </>
  )
}
