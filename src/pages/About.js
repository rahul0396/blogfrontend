import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import styles from '../style/aboutus.module.css'

const About = () => {
  return (
    <>
    <Head>
      <title>AboutUs</title>
      <meta property="og:url"        content="https://getblog2.netlify.app/About" />
              <meta property="og:type"       content="blog" />
              <meta property="og:title"      content=" About Page" />
              <meta property="og:description"content=" About Page Desc" />
              <meta property="og:image"      content="https://picsum.photos/200" />
          {/* twitter og tag */}
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@get" />
              <meta name="twitter:creator" content="@rahulsxh" />
              <meta name="twitter:title" content=" About Page"/>
              <meta name="twitter:description" content=" About Page- getblog"/>
              <meta property="og:url" content="https://getblog2.netlify.app/About" />
              <meta property="og:title" content=" About Page-getblogs" />
              <meta property="og:description" content=" About Page Description" />
              <meta property="og:image" content="https://picsum.photos/200" />
    </Head>
    <Script src='scriptapp.js '></Script>
    <div className={styles.container}>
      <h1 >About Hunting Coders</h1>
      <h3>Introduction</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe totam recusandae eos labore beatae exercitationem aperiam voluptatum earum accusantium nesciunt incidunt dolorum vel ipsam sit, rerum laboriosam eligendi consectetur deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa, temporibus rem, minima eveniet quidem, facilis aliquid voluptas vero debitis accusantium expedita? Recusandae neque sed ab inventore, aut enim facilis.</p>
      <h3>Serviced Offered</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio unde error excepturi, mollitia cumque in placeat doloribus nemo ex, sunt ratione veritatis exercitationem totam nostrum delectus at quas pariatur! Distinctio?</p>
      <p>we offered the following services</p>
      <ul>
        <li>Service1</li>
        <li>Service2</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
        <li>Service1</li>
      </ul>
      <h3>Contact us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ipsam debitis tempora nobis illum natus maiores repellendus iusto soluta ad impedit temporibus nulla similique ratione amet molestias, quisquam placeat labore odit. Tempore, laudantium? Officia et eos dolore atque, ducimus quae! Officiis voluptatum recusandae nisi in explicabo repellat, facilis incidunt aliquid.</p>

    </div>
    </>
  )
}

export default About