import React from "react";
import { Link } from "react-router-dom";

import firebaseApp from "../../../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

import './post.css'

const firestore = getFirestore(firebaseApp);

const Post = ({postData, globalUser, postList, setPostList }) => {


    async function deleteHandler(id) {
        const newPostList = postList.filter((postData)=> postData.id !== id );

        const docuRef = doc (firestore, "posts/postList");
        await updateDoc(docuRef, {firebaseList: [...newPostList]});

        setPostList(newPostList)
    }

    return(
        <div className="post">
            <img src={postData.img} alt="" />
            <div>
                <h3>{postData.title}</h3>
                <p>{postData.content}</p>
                <div>
                    <span>{postData.date}</span><span>{postData.tag1}</span> {postData.tag2 !== "" ? <span>{postData.tag2}</span> : null }
                </div>
                <p>Post by {postData.authorEmail}</p>
                {globalUser!=null && globalUser.uid === postData.uid ?
                    <div>
                        <button onClick={()=>deleteHandler(postData.id)}>delete post</button>
                    </div>
                :
                    null
                }
            </div>
        </div>
    )
}
export default Post
