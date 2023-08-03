import React,{useState} from 'react'
import axios from 'axios';
import style from '../resource/loginstyle.css'
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const [uname,setUser]=useState("");
    const [pass,setPass]=useState("");
    console.log(uname);
    console.log(pass);
    const history= useNavigate();
    async  function submit(e){
      e.preventDefault();
      try{
        await axios.post("/Login",{name:uname,pass:pass})
        .then((res)=>{
          if(res.data.Status === "success"){

            history('/Search');
          }else if(res.data.Status === "notFound"){
            history('/Login');
            alert("User Not Found");
          }else{
            history('/');
          }
        }
          )
        .catch(function(e){console.log(e);})
      }catch(e){
        console.log(e);
      }
    }
  return (
    <>
    <style>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <link rel="stylesheet" href={style} />
    </style>
   
    <div className='full-hai'>
       <div className="field">
            <h1><span>Dai</span>Sushi</h1>
            <img src="img/6310507.jpg" alt=""/>
            <form className="mai text-left" method='POST'onSubmit={submit} >
                <h1>Welcome Back</h1>
                <div className="mb-3 text-left">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" value={uname} onChange={(e)=>{ setUser(e.target.value) ;   }}placeholder="Enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password"value={pass} onChange={(e)=>{setPass(e.target.value); }} placeholder="Enter your password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="col  ">
                <button type="submit" className="new">Submit</button>
                </div>
                <div className="sign"><h4>Not registered yet?</h4><a href="/Register">Sign Up</a></div>

            </form>
               <div className='yr'> <hr/></div>
        </div>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </>
  )
}
