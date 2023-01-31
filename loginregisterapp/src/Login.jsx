import React, {useState} from "react";


export const Login = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  return (
    <form>
      <label for="email">Email</label>
      <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
      <label for="password">Password</label>
      <input value={pass} type="password" placeholder="******" id="password" name="password"/>
      <button>Log in</button>
    </form>
  )
  
}