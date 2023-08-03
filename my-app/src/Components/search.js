import React,{useState,useEffect,useRef} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adCart } from '../state/actionCreator/actions';
import '../resource/search.css'
export default  function Search() {
const [auth,setAuth]=useState(false);
const dispatch=useDispatch();
const history=useNavigate();
const [dish,setDish]=useState([]);   
const [data,setData]=useState("");
const dis=useRef([]);

// useEffect(()=>{
//     if(auth===false){
//         history('/');
//     }
// });

useEffect(()=>{
    if(document.cookie){
        axios.get('/Search').then(res=>{
            if(res.data.Status==="success"){
                setAuth(true);
            }else if(res.data.Status==="fail"){
                setAuth(false);
                history('/');
            }else {
                history('/');
                
            }
        })  
    }else{
        history('/');
        alert("Please login first");
    }
    
        
  
    
},[]);
function test(){
    const url = 'https://keto-diet.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a4d78bb2dmsh6385b543ee83df1p1f3196jsn23870f94ccb6',
		'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
	}
};

try {
	 fetch(url, options).then(res=>res.json()).then(d=> setDish(d));
	
	
} catch (error) {
	console.error(error);
}
   }
   

useEffect(() => {
    test();
  }, []);
  
  console.log( dish);

  const addCart=(index)=>{
    alert("Item added to the Cart");
    const cartName=dis[index].querySelector('h3').innerHTML
    const cartImg=dis[index].querySelector('img ').getAttribute('src');
    const cartPrice=parseInt(dis[index].querySelector('h4').innerHTML,10);
    const iit=[{
        name:cartName,
        cart: cartImg,
        price: cartPrice,
        quantity:1,
        total:cartPrice
    },]
    
    
    // iit.name=cartName;
    // iit.cart=cartImg;
    // iit.price=cartPrice;
    console.log("addcart run");
    dispatch((adCart(iit)));
    
}

    return (
    <>

     <div className="containerr">
       
       <div className="finda">
           <div className="c">
           
               <Link to='/Cart' ><i className="fas fa-regular fa-cart-shopping fa-2xl" > </i></Link>
              <div><span className="badge"></span></div> 
           </div>
           <h1><span>Dai</span>Sushi</h1>
           <div className="searchbar">
               <i className="fa-solid fa-magnifying-glass fa-2xl" ></i>
               <input type="text" placeholder="Search" id="input" value={data} onChange={(e)=>{ setData(e.target.value)}}  />
               
           </div>
       </div>
    <div className="product-list">

       {
       dish.filter((val)=>{
        if(data===""){
            return val;
        }else if(val.recipe.toUpperCase().includes(data.toUpperCase())){
            return val;
        
        }else{
            return 0;
        }
    }).map((val,index)=>{
        return (
            <div className="product" ref={(el) => (dis[index] = el)} key={index} >
            <img src={val.image} alt=""/>
            <h3>{val.recipe}</h3>
            <h4>{val.fat_in_grams}</h4>
            <button onClick={()=>{addCart(index)}}>Add Cart</button>
            </div>
        )
    })
 }
     
     
     </div>
</div>
  
      
    </>
  )
}

