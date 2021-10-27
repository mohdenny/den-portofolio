import Layout from '../components/layout/Layout'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>mohdenny | Home</title>
        <meta name="keywords" content="Mohdenny Portofolio"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
