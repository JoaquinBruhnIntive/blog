import React, { useState } from "react";

import './post.css'

const Post = ({ postData }) => {
    return(
        <div className="post">
            <img src={postData.background} alt="" />
            <div>
                <h3>{postData.title}</h3>
                <p>{postData.content}</p>
                <div>
                    <span>{postData.date}</span><span>{postData.tags.tag1}</span><span>{postData.tags.tag2}</span>
                </div>
            </div>
        </div>
    )
}
export default Post