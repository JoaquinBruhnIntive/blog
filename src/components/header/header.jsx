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
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">youtube</a>
                <a href="#">subscribe</a>
            </div>
        </header>
    )
}

export default Header