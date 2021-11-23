import "./header.css";

const Header = () => {
    return(
        <header>
            <div className="header-welcome">
                <h2>welcome</h2>
                <div>
                    <p>read.</p>
                    <p>post.</p>
                    <p>share.</p>
                </div>
                <p>A react application</p>
                <p>by joaquin bruhn</p>
            </div>
            <div className="header-media">
                <a href="https://es-la.facebook.com/">facebook</a>
                <a href="https://twitter.com/">twitter</a>
                <a href="https://www.youtube.com/">youtube</a>
                <a href="https://www.instagram.com/?hl=es">instagram</a>
            </div>
        </header>
    )
}

export default Header