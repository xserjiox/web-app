import React, { useState, useEffect } from 'react';
import SignOut from '../components/SignOut';
import firebase from "firebase/compat";
import Button from "@mui/material/Button";
import { ChatStyles } from './styles/Chat.styled';

import { database, auth } from '../utils/firebase'
import SendMassage from "./SendMessage";
export interface Client {
    name: string;
    website?: string;
    description?: string;
    visible: boolean;
}

const Chat = () => {
    const [message, setMessage] = useState<firebase.firestore.DocumentData[]>([]);
    const [currentUserImage, setCurrentUserImage] = useState<string>();

    useEffect(() => {
        message.map(({uid, photoURL}) => {
            if (uid === auth.currentUser?.uid) {
                setCurrentUserImage(photoURL);
            }
        })
    }, [message])

    useEffect(() => {
        database.collection('messages').orderBy('text').limit(50).onSnapshot(snapshot => {
            setMessage(snapshot.docs.map(doc => doc.data()))
        })
    }, [])


    return (
        <ChatStyles>
            <div className="chatContainer">
                <header className="chatHeader">
                    <SignOut userImage={currentUserImage}/>
                </header>
                {message.map(({id, text, photoURL, uid, userName}) => {
                    return (
                        <div className="messageContainer" key={id}>
                            <div className="userInfoWrapper">
                                <div className="imageWrapper">
                                    <img className="image" src={`${photoURL}`}/>
                                </div>
                                <div className="userName">{userName}</div>
                            </div>
                            <div className="messageText">{text}</div>
                            
                        </div>
                    )
                })}


            </div>
            <SendMassage/>
        </ChatStyles>
    )}

export default Chat;