import React from 'react';
import SingIn from "./components/SignIn.";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import { MainLayout } from './layouts/styles/MainLayout.styled'


const  App = () => {
    // @ts-ignore
    const [user] = useAuthState(auth);
    console.log('user', user);

  return (
      <MainLayout>
          <div className="mainContainer">
              {!user &&
                  <div className="header">
                      <h3>Welcome to chat</h3>
                  </div>}
              <section>
                  {!user ? <SingIn/> : <Chat/>}
              </section>
          </div>
      </MainLayout>
  )
}

export default App;