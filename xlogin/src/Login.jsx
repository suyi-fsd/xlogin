import { useState } from "react";

function Login(){
     let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let [submitted,setSubmitted] = useState(false);
    let [error, setError] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username=== 'user' && password === 'password'){
            setError('');
            setSubmitted(true);
        }
        else{
            setError('Invalid username or password');
            setSubmitted(false);
        }
    }
   
return(
    <>
    <h1>Login Page</h1>
    {submitted? (<div>Welcome, {username}!</div>):(
        <form onSubmit={handleSubmit}>
        {error&& <p>{error}</p>}
        <div>
        <label htmlFor="Username">Username:</label>
        <input required onChange={(e)=>setUsername(e.target.value)} type="text" id="Username" placeholder="username" />
        </div>
        <div>
            <label htmlFor="Password">Password:</label>
            <input required onChange={(e)=>setPassword(e.target.value)} type="password" id="Password" placeholder="password" />   
        </div>
       <button type="submit">Submit</button>
    </form>
    )}
    
    
    </>
)
}
export default Login;