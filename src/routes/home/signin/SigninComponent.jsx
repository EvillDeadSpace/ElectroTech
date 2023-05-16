import React from 'react'
import NavigationBar from '../../../componentes/NavigationBar'


import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, } from '../../../../datebase/date.firebase' 
 
import SigninForm from '../../../componentes/signin-form/Signup-form'


const SigninComponent = () => {
  
  const handlGoogleSignIn = async () => {
   const {user} = await signInWithGooglePopup();
   const userDocRef= await createUserDocumentFromAuth(user)
  }
 
  return (

    <div>
      <NavigationBar />
      SIGN IN PAGE
      <button onClick={handlGoogleSignIn}>TEST</button>
      <SigninForm/>
      </div>
  )
}

export default SigninComponent