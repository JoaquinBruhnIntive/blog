import React, { useState } from 'react';

import firebaseApp from '../../../credentials';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    signInWithRedirect,
    GoogleAuthProvider,
} from "firebase/auth";

import './logIn.css';

//list of consts to simplify the usage of imported functions
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();



const LogIn = ({ globalUser }) => {
    const [ logInStatus, setLogInStatus ] = useState(false);

    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.userLogin.value;
        const pass = e.target.passLogin.value;

        if ( logInStatus ) {
            await createUserWithEmailAndPassword(auth, email, pass);
            
        } else {
            signInWithEmailAndPassword( auth, email, pass );

        }
    }

    return(
        <section className="logIn">
            { globalUser==null ?  
            <div className="no-logged">
                <h2>{logInStatus ? "Sign in" : "Log In"}</h2>
                <form onSubmit={submitHandler}>
                    <input type="email" name="email" id="userLogin" placeholder="e-mail"/>
                    <input type="password" name="password" id="passLogin" placeholder="Password"/>
                    <button type="submit" placeholder="Submit">
                        {logInStatus ? "Sign in" : "Log In"}
                    </button>
                </form>
                <button onClick= {() => setLogInStatus(!logInStatus)}>
                    { logInStatus ? "Already have an account? Log In" : "You don´t have an account? Sing in" }
                </button>
                <button onClick= {() => signInWithRedirect( auth , googleProvider)}>
                    Access with Google
                </button>
            </div>
            :
            <div className="logged">
                <h2>Welcome</h2>
                <button onClick={()=> signOut(auth)}>Log off and switch account</button>
            </div>
            }
        </section>
    )
}

export default LogIn