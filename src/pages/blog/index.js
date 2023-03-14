import React, { useEffect, useState } from 'react';
// import styles from "../app/page.module.css";
import styles from '../../style/blog.module.css';
import Head from 'next/head';
import Link from 'next/link'

const Blog = () => {
 

  const[blogdata,setBlogdata]=useState([]);
  
  // fetch('../blogdata/how-to-learn-javascript')
  // .then(res=>res.json())
  // .then(data=> console.log(data))
  useEffect(()=>{
      fetch('https://dailyblog-2i4c.onrender.com/api/blogs')
    .then(res=>res.json())
    .then(data=>{ 
                  setBlogdata(data)});
                  

  }
,[]);
console.log(blogdata);
  
  return (
  <>
  <Head>
    
      
      <title>Blog</title>
      {/* facebook og tag */}
              <meta property="og:url"        content="https://getblog2.netlify.app/Blog" />
              <meta property="og:type"       content="blog" />
              <meta property="og:title"      content="blog page" />
              <meta property="og:description"content="Blog Page Desc" />
              <meta property="og:image"      content="https://picsum.photos/200" />
          {/* twitter og tag */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@getblogs" />
          <meta name="twitter:creator" content="@rahulsh" />
          <meta name="twitter:title" content="blog page"/>
          <meta name="twitter:description" content="blogPAge- getblog"/>
          <meta property="og:url" content="https://getblog2.netlify.app/Blog" />
          <meta property="og:title" content="blogPage-getblogs" />
          <meta property="og:description" content="BlogPage Description" />
          <meta property="og:image" content="https://picsum.photos/200" />
    </Head>
  <main className={styles.main}>
    
  
    <div className={styles.card_box}>
          <h2>Blog Post</h2>
          
         { blogdata.data?.map((a)=>
         (<Link href={{pathname:`/blog/${a.id}`, query:{heading:a.attributes.heading, content:a.attributes.content}}}>
         <div  key={a.id}className={styles.card}>
            <h4>{a.attributes.heading}</h4>
            <p>{a.attributes.content}</p>
          </div>
         </Link> 
          )
            )
          }
         </div>
        </main>
        </>
  )
}

export default Blog;

