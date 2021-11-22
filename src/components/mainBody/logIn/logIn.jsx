import './logIn.css'

 let loggedUser = false

const LogIn = () => {
    return(
        <section className="logIn">
            <div className="no-logged">
                <h2>Log in</h2>
                <form>
                    <input type="text" name="username" id="user-login" placeholder="Username"/>
                    <input type="password" name="password" id="pass-login" placeholder="Password"/>
                    <input type="submit" placeholder="Submit"/>
                </form>
            </div>
        </section>
    )
}

export default LogIn