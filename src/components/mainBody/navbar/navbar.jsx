import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
    return(
        <nav>
            <Link to="/">posts</Link>
            <Link to="/addPost">new post</Link>
            <Link to="/about">about</Link>
            <Link to="/logIn">log in</Link>
        </nav>
    )
}

export default Navbar