import React from 'react'
import NavigationBar from '../../../componentes/NavigationBar'


import { signInWithGooglePopup, createuserDocumentFromAuth, signInWithGoogleRedirect, } from '../../../../datebase/date.firebase' 
 
import SigninForm from '../../../componentes/signin-form/Signin-form'


const SigninComponent = () => {
  
  const handlGoogleSignIn = async () => {
   const {user} = await signInWithGooglePopup();
   const userDocRef= await createuserDocumentFromAuth(user)
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