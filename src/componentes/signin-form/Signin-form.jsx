import React from 'react'
import { useState } from 'react'





const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}



const signUpForm = () => {
  
 

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields
   console.log(formFields)
  const handleChange = (e) => {
      const {name, value} = e.target
      setFormFields({...formFields, [name]: value})

  }

  return (
    <div>
        <h1>SIGN up with your email and password </h1>
        <form onSubmit={() => {}} >
            <label htmlFor="">Display Name</label>
            <input type="text" required onChange={handleChange} name='displayName' value={displayName}/> 

            <label htmlFor="">Email</label>
            <input type="email" required onChange={handleChange} name='email' value={email} />

            <label htmlFor="">Password</label>
            <input type="password" required  onChange={handleChange} name='password' value={password}/>

            <label htmlFor="">Confirm Password</label>
            <input type="password" required  onChange={handleChange} name='confirmPassword' value={confirmPassword} />
            <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}

export default signUpForm