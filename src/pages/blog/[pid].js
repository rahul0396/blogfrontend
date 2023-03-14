import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../style/blogPost.module.css'
import Head from 'next/head'

export const getStaticPaths=async ()=>{
  const res=await fetch('https://dailyblog-2i4c.onrender.com/api/blogs');
  const data= await res.json();
  const paths=data.data.map((a)=>{
    return{
      params:{pid:a.id.toString(),},
    }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps=async(context)=>{
  const id=context.params.pid;
  const res=await fetch(`https://dailyblog-2i4c.onrender.com/api/blogs/${id}`);
  const data= await res.json();
   return { 
    props:{
      data,
    }
   }

}

const blogdet = ({data}) => {
    // const router = useRouter();
    // const {pid,heading,content}=(router.query);
    console.log(data.data);
    

  return (
    <>
    <Head>
    
      
      <title>Blog </title>
    {/* facebook og tag */}
            <meta property="og:url"        content={`https://dailyblog1.netlify.app/blog/${data.data.id}`} />
            <meta property="og:type"       content="blog" />
            <meta property="og:title"      content={data.data.attributes.heading} />
            <meta property="og:description"content={data.data.attributes.content} />
            <meta property="og:image"      content="https://picsum.photos/200" />
        {/* twitter og tag */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@getblogs" />
        <meta name="twitter:creator" content="@rahulsh" />
        <meta name="twitter:title" content={data.data.attributes.heading}/>
        <meta name="twitter:description" content={data.data.attributes.content}/>
        <meta property="og:url" content={`https://dailyblog1.netlify.app/blog/${data.data.id}`} />
        <meta property="og:title" content={data.data.attributes.heading} />
        <meta property="og:description" content={data.data.attributes.heading} />
        <meta property="og:image" content="https://picsum.photos/200" />
  </Head>
    <div key={data.data.id}className={styles.container}>
        <h1>{data.data.attributes.heading}</h1>
        <p style={{fontSize:'30px',marginTop:'1rem'}}>{data.data.attributes.content}</p>
        
       
    </div>
    </>
  )
}

export default blogdet