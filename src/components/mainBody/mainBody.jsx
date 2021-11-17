import Navbar from './navbar/navbar';
import Posts from './posts/posts';
import AddPost from  './addPost/addPost';
import About from './about/about';
import LogIn from './logIn/logIn'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './mainBody.css';

const MainBody = () => {
    return(
        <div className="main-body">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Posts />}/>
                    <Route path="/addPost" element={<AddPost />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/logIn" element={<LogIn />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainBody