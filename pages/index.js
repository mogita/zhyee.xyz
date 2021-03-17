import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>知一网络</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header title='宜昌知一网络科技有限公司' />
        <p className='description'>
          联系我们{' '}
          <code className='email'>
            <a href='mailto:hello@zhyee.xyz'>hello@zhyee.xyz</a>
          </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
