import React from 'react'
import {useParams} from 'react-router-dom';

const blogdetail = () => {
  // const api='http://localhost:1337/api/blog/'
  // fetch(api)
  // .then(res=>res.json())
  // .then(data=>console.log(data))
  // const {blogId}=useParams();
  // const blog=api.find(blogdet=>blogdet.id===blogId)
  return (
    <div>
      {/* <h1>{blog.attributes.BlogTitle}</h1> */}
      <p>description</p>
    </div>
  )
}

export default blogdetail;