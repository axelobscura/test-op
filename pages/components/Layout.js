import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Layout({children}){
  return(
    <div className={styles.container}>
      <Head>
        <title>Test scores for my students</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}

      <footer className={styles.footer}>
        <p>A webpage that displays the test scores for my students that have been already entered into the system</p>
      </footer>
    </div>
  )
  
}