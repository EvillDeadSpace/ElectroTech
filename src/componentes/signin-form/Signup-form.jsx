import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from '../../../datebase/date.firebase'
import { TextInput, Checkbox, Label, Button } from 'flowbite-react'

import TestSingInForm from '../signin-form/TestSingInForm'





const signUpForm = () => {

  
  const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password, confirmPassword , displayName} = formFields
  

  const resetFormFields = () =>{
    setFormFields(defaultFormFields)
  }


  console.log(formFields)
  
  
const handleChange = (e) => {

      const {name, value} = e.target
      setFormFields({...formFields, [name]: value})

  }


const handleSubmit = async (e) => {
  e.preventDefault()

    if(password !== confirmPassword){
      alert('passwords dont match')
      return;
    }
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password)
    

    await createUserDocumentFromAuth(user, {displayName})
    resetFormFields();
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('That email address is already in use!');
    }else 
    console.log(error)
    
  }
}



  return (
    <div>
    
      <TestSingInForm />

        {/* modal here */}

      {/* The button to open modal */}
    <label htmlFor="my-modal-4" className="btn w-1/2   bg-blue-600   hover:text-stone-300 ">Register new account</label>
      {/* Inside of modal */}
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
    <label className="modal-box relative" htmlFor="">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
  <div>
    <h1 className=' mt-7 text-3xl font-lora'>I do not have a account</h1>
    <p>Sign in with your email and password</p>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Display Name:"
      />
    </div>
    <TextInput
      id="email2"
      type="text"
      placeholder="Display Name"
      name='displayName'
      required
      onChange={handleChange}
      shadow={true}
       value={displayName}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email:"
      />
    </div>
    <TextInput
      id="email2"
      type="email"
      placeholder="test@test.com"
      required
      onChange={handleChange}
      name='email'
      placeholder='email'
      value={email}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password:"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      placeholder="Password"
      required
      onChange={handleChange}
      name='password'
      value={password}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="repeat-password"
        value="Repeat password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      placeholder="Repeat password"
      required
      onChange={handleChange}
      name='confirmPassword'
      value={confirmPassword}
      shadow={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the 
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
  <Button type="submit">
       Register new account 
    </Button>
    </form>
  </label>
</label>
    </div>
  )
}

export default signUpForm