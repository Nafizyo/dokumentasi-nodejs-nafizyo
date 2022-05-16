import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mihani 3R</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Halaman Utama mihani.com" />
        <p className="description">Laman web ini masih kosong buat masa ini.</p>
      </main>

      <Footer />
    </div>
  )
}
