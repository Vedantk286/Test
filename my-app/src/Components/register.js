import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../resource/loginstyle.css'
export default function Login() {
    const history=useNavigate();
    const [uname,setUser]=useState("");
    const [pass,setPass]=useState("");
    console.log(uname);
    console.log(pass);
    async  function submit(e){
      e.preventDefault();
      try{
        await axios.post("/Register",{name:uname,pass:pass})
        .then(
            function(response){
                console.log(response.data);
                if(response.data.Status==="success"){
                  history('/login');
                  alert("Success registration");
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
    <div>
       <div className="field">
            <h1><span>Dai</span>Sushi</h1>
            <img src="img/6310507.jpg" alt=""/>
            <form className="mai text-left" method='POST'onSubmit={submit} >
                <h1>Register</h1>
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
                <div className="sign"><h4>Already have account?</h4><a href="/Login">Login </a></div>

            </form>
               <div className='yr'> <hr/></div>
        </div>
        
    </div>
   
    </>
  )
}
