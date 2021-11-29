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
    //the state of logInStatus determines if the user is signing in or loggin in
    const [ logInStatus, setLogInStatus ] = useState(false);

    //This function takes the values from the form and can create a new user or access with an existing one 
    async function submitHandler(e) {
        e.preventDefault();
        const email = e.target.userLogin.value;
        const pass = e.target.passLogin.value;

        //Uses firebase functions to create a new user/access with an existing one
        if ( logInStatus ) {
            await createUserWithEmailAndPassword(auth, email, pass);
            
        } else {
            signInWithEmailAndPassword( auth, email, pass );

        }
    }

    return(
        <section className="logIn">
            {/* If globalUser = null (there is no user already logged in) it shows the log in/sign in options */}
            { globalUser==null  ?  
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
            // if there is a user logged in, it shows the log off buton that uses a firebase function
            <div className="logged">
                <h2>Welcome {globalUser.email}</h2>
                <button onClick={()=> signOut(auth)}>Log off and switch account</button>
            </div>
            }
        </section>
    )
}

export default LogIn