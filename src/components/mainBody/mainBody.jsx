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

    const fakePost = [
        {uid:"NbkNbTTDjRYelytE1kUkIDukeit1", title:"Post Firebase 1", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga alias iusto qui vel. Optio culpa molestiae corrupti fugiat saepe officia odio, magnam sint laboriosam recusandae qui rerum facilis exercitationem.", date:"march 6, 2017", tag1:"space", tag2:"technology", authorEmail:"example@gmail.com", background:"http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"},
        {uid:"NbkNbTTDjRYelytE1kUkIDukeit1", title:"Post Firebase 2", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga alias iusto qui vel. Optio culpa molestiae corrupti fugiat saepe officia odio, magnam sint laboriosam recusandae qui rerum facilis exercitationem.", date:"march 6, 2017", tag1:"space", tag2:"technology", authorEmail:"example@gmail.com", background:"http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"},
        {uid:"NbkNbTTDjRYelytE1kUkIDukeit1", title:"Post Firebase 3", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga alias iusto qui vel. Optio culpa molestiae corrupti fugiat saepe officia odio, magnam sint laboriosam recusandae qui rerum facilis exercitationem.", date:"march 6, 2017", tag1:"space", tag2:"technology", authorEmail:"example@gmail.com", background:"http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"},
    ]

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
                    <Route path="/" element={<Posts postList={fakePost} />}/>
                    <Route path="/addPost" element={<AddPost globalUser={globalUser} />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/logIn" element={<LogIn globalUser={globalUser} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainBody