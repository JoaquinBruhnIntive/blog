import React from "react";

import Post from './post/post';

import './posts.css'

const Posts = ({globalUser, postList, setPostList}) => {

    return(
        <section>
            {/* creates one Post component for each element on postList */}
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