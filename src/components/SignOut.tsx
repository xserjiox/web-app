import React from "react";
import { auth } from "../utils/firebase";
import { SignOutStyles } from './styles/SignOut.styled';
import Button from "@mui/material/Button";

interface IProps {
    userImage: string | undefined;
}

const SignOut: React.FC<IProps> = ({ userImage }: IProps) => {
    return (
        <SignOutStyles>
            <div className="signOutContainer">
                <div className="imgBtnWrapper">
                    <div className="imageWrapper">
                        {userImage && <img className="image" src={userImage}/>}
                    </div>
                    <Button size="large" className="buttonLogout" onClick={() => auth.signOut()}>log out</Button>
                </div>
                <div className="nameWrapper">
                    <h5>{auth.currentUser?.displayName}</h5>
                </div>
            </div>
        </SignOutStyles>
    )}

export default SignOut;