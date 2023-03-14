import Image from 'next/image';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Script from 'next/script';
import Link from 'next/link'
import Navbar from '@/Component/Navbar';
// import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
        <Head>
        <title>My page title</title>
               {/* facebook og tag */}
               <meta property="og:url"        content="https://getblog2.netlify.app/" />
        <meta property="og:type"       content="blog" />
        <meta property="og:title"      content="Hunting Coder A Place for coders to read and write a blog." />
        <meta property="og:description"content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
        <meta property="og:image"      content="https://picsum.photos/200" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@huntingcode" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta property="og:url" content="https://getblog2.netlify.app/" />
          <meta property="og:title" content="Home PAge-huntingcode" />
          <meta property="og:description" content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
          <meta property="og:image" content="https://picsum.photos/200" />
          </Head>
      {/* <Script src="sc.js"></Script> */}
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Hunting Coders</h1>
          <p>A Blog Website for Hunting Coder and by the hunting Coder</p>
        </div>
      </main>
    </>
  );
}
