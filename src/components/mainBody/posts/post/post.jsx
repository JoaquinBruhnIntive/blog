import React from "react";
import { Link } from "react-router-dom";

import firebaseApp from "../../../../credentials";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

import './post.css'

const firestore = getFirestore(firebaseApp);

const Post = ({postData, globalUser, postList, setPostList }) => {

    //Funtion for the Delete button, uses the post ID to identify it on the list
    async function deleteHandler(id) {
        //Creates a new array with the eliminated post filtered
        const newPostList = postList.filter((postData)=> postData.id !== id );

        //Creates a contant for the location of the post list on the database and then replaces the array that´s there
        const docuRef = doc (firestore, "posts/postList");
        await updateDoc(docuRef, {firebaseList: [...newPostList]});

        //updates postList localy
        setPostList(newPostList)
    }

    return(
        <div className="post">
            <img src={postData.img} alt="" />
            <div>
                <h3>{postData.title}</h3>
                <p>{postData.content}</p>
                <span>Date: {postData.date}</span>
                <div>
                    {/* conditional for the case that the second tag doesn´t exist */}
                    <span>{postData.tag1}</span> {postData.tag2 !== "" ? <span>{postData.tag2}</span> : null }
                </div>
                <p>Post by {postData.authorEmail}</p>
                {/* the display of the "delete button" depends on the user curently logged in */}
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
