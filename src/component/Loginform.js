import React, { useState } from 'react'

function Loginform({Login ,error}) {
    
    const [details,Setdetails] = useState({email:"" , password:""});

    const submitHandler = e=>{
        e.preventDefault()
        Login(details)
    }

    return (
        <div className="container">
     <form onSubmit={submitHandler}>
<div className='login-header'>
            <h2>Login</h2>
           {(error !=="") ? (<div className="error"> {error} </div>)
        :("")   
        } 
          </div> 

            <div className='login-form'>
                <label htmlFor="email">*Email</label>
                <input type='email' name="email"  id="email"  placeholder="Enter your email address"
                onChange={e=>Setdetails({...details,email:e.target.value})} 
                value={details.email}/>
            </div>
            <div className='login-form'>
                <label htmlFor="Passowrd">*Password</label>
                <input type='text' name="password"  id="password" placeholder="Enter your password"
                onChange={e=>Setdetails({...details , password:e.target.value})}
                value={details.password}
                />
            </div>
            <div className="login-form">
            <input type="submit" value="LOGIN"/>
            </div>
            {/* </div> */}

     </form>
     </div>
        )
}

export default Loginform
