import React,{useState} from 'react'

const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const [err,setErr]=useState({
    is:false,
    message:""
  });
  const valueChangeHandler=(e)=>{
    setErr({
      is:false,
    message:""
    });
    setData(prev=>({...prev,[e.target.name]:e.target.value}))
    
  }

  const loginHandler=(e)=>{
    e.preventDefault();
    if(data.email===""||data.password===""){
      setErr({
        is:true,
        message:"Please Provide All the Info!"
      });
      return;
    }

  }


  return (
    <div className='login'>
        {err.is && <div className="errMsg">{err.message}</div>}
        <form className="loginForm">
          <div className="adminImg">
          <img src="https://thumbs.dreamstime.com/b/user-glyph-icon-web-mobile-admin-sign-vector-graphics-solid-pattern-white-background-eps-user-glyph-icon-web-mobile-103294421.jpg" alt="logo"/>
          </div>
       
            <div className='formControl'>
                <label>Email</label>
                <input className='formInput' onChange={valueChangeHandler} type="text" name="email" />
            </div>
            <div className='formControl'>
                <label>Password</label>
                <input className='formInput' onChange={valueChangeHandler} type="password" name="password" />
            </div>
            <button className="loginButton" onClick={loginHandler}>Login</button>
        </form>
    </div>
  );
}

export default Login