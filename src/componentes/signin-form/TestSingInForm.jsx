import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInAuthWithEmailAndPassword  } from '../../../datebase/date.firebase'
import { TextInput, Checkbox, Label, Button } from 'flowbite-react'




const TestSingInForm = () => {

  
  const defaultFormFields = {
  email: '',
  password: '',
 
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password, } = formFields
  

  const resetFormFields = () =>{
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => {
      const {name, value} = e.target
      setFormFields({...formFields, [name]: value})

  }

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await signInAuthWithEmailAndPassword(email, password)
    console.log(response)
    resetFormFields();
  } catch (error) {
    console.log(error)
    switch (error.code) {
      case 'auth/user-not-found':
        alert('email invalid')
        break;
      case 'auth/wrong-password':
        alert('password invalid')
        break;
      default:
        console.log(error)  
      break;

    }
}
}
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex  mb-3 flex-col gap-4 w-1/2">
    <div>
    <h1 className=' mt-7 text-3xl font-lora'>Already have account </h1>
    <p className='mt-1  font-lora font-light'>Signin now</p>
    
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
      Sign Up
    </Button>
    </form>
    </div>
  )
}

export default TestSingInForm