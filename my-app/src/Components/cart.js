// eslint-disable-next-line react-hooks/exhaustive-deps
import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { resetCart,incData,decData, itemTotal } from '../state/actionCreator/actions';
import {useNavigate} from 'react-router-dom';
import '../resource/cart.css'
import axios from 'axios';

export default function Cart() {
    const history=useNavigate();
    const [tota,setTotal]=useState(0);
    const [auth,setAuth]=useState(false);
    const dispatch=useDispatch();
    const amount = useSelector(state => state.lad)
    console.log(amount.map((val,i)=>{ return val.total}));
  useEffect(()=>{
    if(document.cookie){
      axios.get('/Cart').then(res=>{
        if(res.data.Status==='success'){
          setAuth(true);
      }else if(res.data.Status==='fail'){
        
        history('/Login');
        alert("Invalid access first Login");
      }else{
        history('/');
      }
    });
    }else{
      history('/');
      alert('Login first');
    }
  },[]);
  useEffect(() => {
    var r=0;
    amount.length!==0 ? amount.map((data,i)=>{
      console.log(data)
      console.log(data.price)
       r=r+data.total;
      return setTotal(r);
    }):setTotal(0);
  },[amount])
  useEffect(() =>{
  
    console.log(amount);
  },[amount]);

    // const amount = useSelector(state => state.lad)
    
    
    return (
      <>
        <style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"/>
  
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500&family=Outfit:wght@500&family=Roboto:wght@300;400;500&family=Satisfy&family=Work+Sans:wght@200;400;600&display=swap');
</style>
        <div className='c-title'>
          <h1>Your Cart</h1>
          <button className='c-btn'><span>Make Payment</span></button>
        </div>
        <div className='c-container'>
        <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Items</th>
      <th scope="col"></th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
      
      {
        amount.map((data,i)=>{
          
          return(
            <tr key={i}>
                
             
               
                  <td>
                    <div className='c-box-hai' >
                      <h1>{data.name}</h1>
                    </div>
                  </td>
                  <td> <img className="c-meal mx-5"src={data.cart} width="200px" height="100px" alt="" /></td> 
                  <td ><button onClick={()=>{dispatch(incData(i));dispatch(itemTotal(i))}}><i className="fa-regular fa-plus fa-xl"></i> </button ><h1>{data.quantity}</h1><button onClick={()=>{dispatch(decData(i));dispatch(itemTotal(i))}}><i className="fas fa-regular fa-minus fa-xl"></i></button></td>
                  <td> <h2>{data.total}</h2></td>                 
                
                 
           
    </tr>
              );
            })
          }
      
      
     
   
  </tbody>
</table>
          
            
             
        
        <h1 >Your cart: {tota}</h1>
     
        <button className="btn-3" onClick={()=>{dispatch(resetCart())}}>Reset</button>
        {  
            
            // data.length >0 &&data ?data.map((val,i) => {
                
            //     return(
            //         <div key={i}>
            //             <h1>{val.cartName}</h1>
            //             <img src={val.cartImg} alt="" />
                       
            //         </div>
            //     );
            //     // your code here
            // }):console.log("Empty array")
        }
    </div>
    <script src="https://kit.fontawesome.com/9301f988d3.js" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script>
    </>
  )
}
