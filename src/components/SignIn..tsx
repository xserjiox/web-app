import React from "react";
import firebase from "firebase/compat";
import { auth } from '../utils/firebase'
import { SignInStyles } from './styles/SignIn.styled';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

const SingIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

   return (
       <SignInStyles>
           <div className="signInContainer">
               <div className="title">Login with Google</div>
               <Button
                   className="signInButton"
                   variant="contained"
                   onClick={signInWithGoogle}
                   endIcon={<SendIcon />}
               >
                   sign in
               </Button>
           </div>
       </SignInStyles>
   )}

export default SingIn;