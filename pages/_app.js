import Layout from '../components/layout/Layout'
import Head from 'next/head'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Mohdenny</title>
        <meta name="keywords" content="Mohdenny Portofolio"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
