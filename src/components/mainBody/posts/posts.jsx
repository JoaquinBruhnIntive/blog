import React from "react";

import postList from '../../../data/postData';
import Post from './post/post';

import './posts.css'

const Posts = () => {
    return(
        <section>
            {postList.map((post, index) => <Post postData={postList[index]} />)}
        </section>
    )
}

export default Posts