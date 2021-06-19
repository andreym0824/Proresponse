import React, { useEffect } from 'react';
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../src/auth/createStore";
import { SnackbarProvider } from "notistack";
import AuthActions from "../src/action";


function MyApp({ Component, pageProps}) {

  const loggedIn = true;
  useEffect(()=>{

    AuthActions.loginUser(JSON.parse(localStorage.getItem('token')))(store.dispatch, store.getState);
  },[])
  return (
    <React.Fragment>
   <SnackbarProvider dense maxSnack={3}>
      <Provider store={store}>
         <Component {...pageProps} />
      </Provider>
      </SnackbarProvider>
    </React.Fragment>
  )
}


export default MyApp;
