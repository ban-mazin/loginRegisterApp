import React, {useState} from "react";

export const Register = () => {
 const [email, setEmail]= useState('');
 const [pass, setPass] = useState('');
 const [name, setName] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log(email);
 }

  return (
    <> 
    <form onSubmit={handleSubmit}>
    <label for="name">full name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="name"/>
      <label for="email">email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
      <label for="password">password</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
      <button type="submit"> Register</button>
    </form>
    
    </>
  )
  
}