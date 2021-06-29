import React ,{useState}from 'react';

import Loginform from './component/Loginform';


const App=()=> {
 const admin ={
   email: "Burhan@gmail.com",
   password: "abcd"
 }
 const [user ,Setuser] = useState({email:"" , password:""});
 const[error, Seterror] = useState("") ;

 const Login = details =>{
   if(details.email === admin.email  && details.password === admin.password)
   {console.log("LOGGED IN");
   alert("logged in");
 }
 if(details.email ===null || details.email !==admin.email)
 {
   Seterror("Please enter a valid email")
 }
 if(details.password ==="" || details.password !== admin.password)
 {
   Seterror("Please enter a valid password")
 }
 
 }




  return (
    <div className="App">
      { <Loginform Login={Login} error={error}/> 
    
    }
    </div>
    );
}

export default App;
