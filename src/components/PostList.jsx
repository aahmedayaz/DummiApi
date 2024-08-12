import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
  const {postList , addInitialPosts} = useContext(PostListData)
  console.log(postList)
  
  const handleGetPostClick = () =>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data =>{
      addInitialPosts(data.posts);
      console.log(data.posts);
    })
    .catch((e) => {
      console.log(e)
    })

  }
  return (
   <>
    { postList.length === 0 && <WelcomeMessage onGetPostClick={handleGetPostClick}/>}
    {
      postList.map((post, index) => {
        return <Post post={post} key={index}/>
      })
    }
   </>
  )
}

export default PostList;
