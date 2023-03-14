import React from 'react'
import styles from '../style/contact.module.css';
import Head from 'next/head';
import Image1 from '../assests/image/blog.jpg'

const Contactus = () => {
  return (<>
  
    <Head>
      
      
      <title>Contact us</title>
      <meta
  name="getblogs"
  content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
/>

                  {/* facebook og tag */}
                  <meta property="og:url"        content="https://getblog2.netlify.app/blog" />
        <meta property="og:type"       content="blog" />
        <meta property="og:title"      content="Getblogs :A Place for coders to read and write a blog." />
        <meta property="og:description"content="Getblogs coders a place for all the peoples whose are learning the new things that can read and write a blog." />
        <meta property="og:image"      content="https://example.com/images/cool-page.jpg" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@getblogs" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta name="twitter:title" content="Contactus=>Getblogs :A Place for coders to read and write a blog."/>
          <meta name="twitter:description" content="Contactus- getblog"/>
          <meta property="og:url" content="https://getblog2.netlify.app/blog" />
          <meta property="og:title" content="blog-getblogs" />
          <meta property="og:description" content="Hunting coders a place for all the peoples whose are learning the new things that can read and write a blog." />
          <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
    </Head>
    <div className={styles.container}>
      <h1>Contact US</h1>

      <div className={styles.inputcontainer}>
      <label htmlFor="">Enter Your Name</label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Email address</label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Phone </label>
      <input type="text" />
      </div>

      <div className="input-container">
      <label htmlFor="">Elaborate your concern</label>
      <input type="text" />
      </div>
      <button className="submit-btn">Submit</button>

    </div>
    </>
  )
}

export default Contactus