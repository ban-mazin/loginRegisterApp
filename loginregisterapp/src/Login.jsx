import React, {useState} from "react";


export const Login = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <label for="email" >Email</label>
      <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
      <label for="password">Password</label>
      <input value={pass} type="password" placeholder="******" id="password" name="password"/>
      <button type="submit">Log in</button>
    </form>
    <button> Already have an account? Register</button>
    </>
    
  )
  
}