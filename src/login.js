import React from "react";

const Login = (props) => {

  const { 
    email, 
    setEmail, 
    setPassword, 
    handleLogin, 
    handleSignUp, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError,
  } = props;

   return(
      <section className="login">
         <div className="loginContainer">
          <label>UserName</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         </div>
      </section>
   )
}

export default Login;