//React imports
import React, { useState, useEffect } from 'react';
//Custom components imports
import Navbar from './navbar/navbar';
import Posts from './posts/posts';
import AddPost from  './addPost/addPost';
import About from './about/about';
import LogIn from './logIn/logIn'
//Firebase Imports
import firebaseApp from '../../credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
//React router imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Style imports
import './mainBody.css';

const firestore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

//default array that is set in case the DB is empty
const placeholderPost = [
    {id:"default post", uid:"NbkNbTTDjRYelytE1kUkIDukeit1", title:"Post Firebase 1", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga alias iusto qui vel. Optio culpa molestiae corrupti fugiat saepe officia odio, magnam sint laboriosam recusandae qui rerum facilis exercitationem.", date:"march 6, 2017", tag1:"space", tag2:"technology", authorEmail:"example@gmail.com", img:"http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"},
]

const MainBody = () => {
    //State that updates the logged user
    const [ globalUser, setGlobalUser ] = useState(null);
    //State that updates the lists of posts
    const [ postList, setPostList ] = useState([])



    useEffect(createDefaultPosts, [])
    //This function gets the post list from firebase and creates a default one using "placeHolderPost if none exist"
    async function createDefaultPosts(){
        //Here we get the reference of the path to the postList file in firebase
        const docuRef = doc(firestore, "posts/postList")
        //Here we reed the contents of that reference (always returns something even if the reference doesn´t exist)
        const listSearchReturn = await getDoc(docuRef);
        //Checks if the content extracted earlier actualy exists, if it doesn´t it creates a default one and if it does it loads that one
        if (!listSearchReturn.exists()){
            await setDoc(docuRef, { firebaseList: [...placeholderPost]})
            const docu = await getDoc(docuRef);
            const infoDocu = docu.data();
            setPostList(infoDocu.firebaseList)
            
        } else {
            const docu = await getDoc(docuRef);
            const infoDocu = docu.data();
            setPostList(infoDocu.firebaseList)
        }
        
    }
    //This firebase function responds in real time to a change on the state of the logged user
    onAuthStateChanged( auth, (firebaseUser)=>{
        //decides what to do in case there is a logged user
        if(firebaseUser){
            setGlobalUser( firebaseUser )

        } else {
            setGlobalUser( null )
        }
    })


    return(
        <div className="main-body">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Posts globalUser={globalUser} postList={postList} setPostList={setPostList}/>}/>
                    <Route path="/addPost" element={<AddPost globalUser={globalUser} postList={postList} setPostList={setPostList} />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/logIn" element={<LogIn globalUser={globalUser} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainBody