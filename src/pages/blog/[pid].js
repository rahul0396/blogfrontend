import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../style/blogPost.module.css'
import Head from 'next/head'

const blogdet = () => {
    const router = useRouter();
    const {pid,heading,content}=(router.query);
    console.log(heading);
    

  return (
    <>
    <Head>
    
      
      <title>Blog {pid}</title>
    {/* facebook og tag */}
            <meta property="og:url"        content={`https://getblog2.netlify.app/blog/${pid}`} />
            <meta property="og:type"       content="blog" />
            <meta property="og:title"      content={`${heading}`} />
            <meta property="og:description"content={`${content}`} />
            <meta property="og:image"      content="https://picsum.photos/200" />
        {/* twitter og tag */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@getblogs" />
        <meta name="twitter:creator" content="@rahulsh" />
        <meta name="twitter:title" content={`${heading}`}/>
        <meta name="twitter:description" content={`${content}`}/>
        <meta property="og:url" content={`https://getblog2.netlify.app/blog/${pid}`} />
        <meta property="og:title" content={`${heading}`} />
        <meta property="og:description" content={`${content}`} />
        <meta property="og:image" content="https://picsum.photos/200" />
  </Head>
    <div className={styles.container}>
        <h1>{heading}</h1>
        <p style={{fontSize:'30px',marginTop:'1rem'}}>{content}</p>
       
    </div>
    </>
  )
}

export default blogdet