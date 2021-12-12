import React, { useEffect, useState } from "react";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import firebase from "firebase/compat";

import { auth, database } from '../utils/firebase'

const SendMassage = () => {
    const [message, setMessage] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value.trim());
    }

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (message === '') return;
        // @ts-ignore
        const { uid, photoURL } = auth.currentUser;

        await database.collection('messages').add({
            text: message,
            photoURL,
            uid,
            userName: auth.currentUser?.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setMessage('');
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input value={message} placeholder="Write message" onChange={handleInputChange}/>
                <Button type="submit">send message</Button>
            </form>

        </div>
    )
}

export default SendMassage;