import React from "react";

// import postList from '../../../data/postData';
import Post from './post/post';

import './posts.css'

const Posts = ({globalUser, postList, setPostList}) => {

    return(
        <section>
            {postList.map((post) => <Post 
                                                key={post.id} 
                                                postData={post} 
                                                globalUser={globalUser} 
                                                postList={postList} 
                                                setPostList={setPostList}
                                            />
                )}
        </section>
    )
}

export default Posts