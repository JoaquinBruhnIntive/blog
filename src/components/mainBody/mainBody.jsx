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
//React router imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Style imports
import './mainBody.css';

const auth = getAuth(firebaseApp);

const MainBody = () => {

    const [ globalUser, setGlobalUser ] = useState(null);

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
                    <Route path="/" element={<Posts />}/>
                    <Route path="/addPost" element={<AddPost />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/logIn" element={<LogIn globalUser={globalUser}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainBody