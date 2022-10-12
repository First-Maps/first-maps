import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Map from '../components/Map'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>First Maps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <main className={styles.main}>
        <Map></Map>
      </main>
    </div>
  )
}
