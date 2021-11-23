import React from "react";

import firebaseApp from "../../../credentials";
import { getAuth } from "@firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore"

// import postList from '../../../data/postData';
import Post from './post/post';

import './posts.css'

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)

const Posts = ({postList}) => {
    return(
        <section>
            {postList.map((post, index) => <Post postData={postList[index]} />)}
        </section>
    )
}

export default Posts