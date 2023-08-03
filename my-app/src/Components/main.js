import React,{useRef,useEffect} from 'react'
import axios from 'axios'
import '../resource/style.css';
import {Link,useNavigate} from 'react-router-dom';


export default function Main() {

  const foot=useRef();
  const div1= useRef();
  const div2= useRef();
  const div3= useRef();
  const mainref=useRef();
  const history=useNavigate();
 
  function HandleClick(event){
    if (event.target === div1.current) {
      let a= div1.current.querySelector(".cirs img").getAttribute("src");
      mainref.current.querySelector("img").setAttribute("src",a);
      mainref.current.querySelector("h1").innerHTML =div1.current.querySelector("h1").innerHTML;
      mainref.current.querySelector("p").innerHTML =div1.current.querySelector("p").innerHTML;
    } else if (event.target === div2.current) {
      let a= div2.current.querySelector(".cirs img").getAttribute("src");
      mainref.current.querySelector("img").setAttribute("src",a);
      mainref.current.querySelector("h1").innerHTML =div2.current.querySelector("h1").innerHTML;
      mainref.current.querySelector("p").innerHTML =div2.current.querySelector("p").innerHTML;
    }
    else if (event.target === div3.current) {
      let a= div3.current.querySelector(".cirs img").getAttribute("src");
      mainref.current.querySelector("img").setAttribute("src",a);
      mainref.current.querySelector("h1").innerHTML =div3.current.querySelector("h1").innerHTML;
      mainref.current.querySelector("p").innerHTML =div3.current.querySelector("p").innerHTML;
    }
  };
  const clickhai=()=>{
    foot.current.scrollIntoView();
  }
  return (
    
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500&family=Outfit:wght@500&family=Roboto:wght@300;400;500&family=Satisfy&family=Work+Sans:wght@200;400;600&display=swap');
</style>
    <div>
      <div className="container">
    <nav>
      <div className="title">
        <ul>
          <li><a href="/">Home</a></li>
          <Link to="/Search"><li>Menu</li></Link>
          <li><a href="/">Our Services</a></li>
        <li ><button onClick={clickhai} >About</button></li>
        </ul>
        <div className="lines"><img src='img/lines.png' alt=""/></div>
        <h1><span>Dai</span>Sushi</h1>
        <div className="btn"><Link to="/Login"><button >Make An Order</button></Link></div>
        <div className="rotr"><span >with</span></div>
        <div className="phrase">
          <h1>Fresh Food<br/>
            <span id="gt">Great Taste</span></h1>
          </div>
          
        <div className="tagl"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
          Repellendus, voluptatibus nostrum qui nisi unde iusto<br/>
          vero. Sunt assumenda quia minus.</p></div>
        <div className="btn1"><button>Make A Reservation</button></div>
        
      </div>
    </nav>
    <div className="fish">
      <img src='img/fish.png' alt=""/>
    </div>
    <div className="leaf"><img src='img/coriander.png' alt=""/></div>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a625a" fillOpacity="1" d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
  
  <div className="text">
    <div className="circle"><img src='img/invertedcomma.png' alt=""/></div>
    <h1>We Try to Keep as <span>Fresh & Healthy as </span><br/>
    Possible by Using <span>Local, seasonal Ingredients.</span><br/>
    At the Same Time, We Avoid to Use artificial <br/>
    Ingredients and Food Additives during<br/>
    cooking Process.</h1>
  </div>
  <div className="sushi">
    <h1>We Create Delicious Sushi<br/>
        Combination for You</h1>     
    <div className="curve"></div>                 
  </div>
  <div className="plate">
    <div className="dish">
      <img src='img/pizza.jpg' alt=""/>
      <div className="red">
        <h3>Pizza Platter</h3>
        <p>Explore More</p>
      </div>      
    </div>
    <div className="dish">
      <img src='img/pasta.jpg' alt=""/>
      <div className="red">
        <h3>Pasta Platter</h3>
        <p>Explore More</p>
      </div>      
    </div>
    <div className="dish">
      <img src='img/mixed.jpeg' alt=""/>
      <div className="red">
        <h3>Mixed Platter</h3>
        <p>Explore More</p>
      </div>      
    </div>
    <div className="lcus">
      <h1>Menu That Our Customers <br/>
          Loved The Most</h1>     
      <div className="curve2"></div>                 
    </div>
  </div>
  <div className="select">
    <div className="main" ref={mainref}>
      <img id="r"src='img/paneer.jpg' alt=""/>
      <h1>#</h1>
      <p>#</p>
    </div>
    <div  className="options" onMouseOver={HandleClick}>
      <div id='0' className="odet"  ref={div1}>
        <div className="cirs"><img  className='v' src='img/biryani.jpg' alt=""/></div>
        <h1>Biryani</h1>
        <p>Lorem ipsum dolor sit amet consectetur<br/>
           adipisicing elit. Natus, corrupti.</p>
        <button>Order Now</button>
      </div>
      <div id="odet2"className="odet" ref={div2}>
        <div className="cirs"><img src='img/paneer.jpg' alt=""/></div>
        <h1>Paneer Fry</h1>
        <p>Lorem ipsum dolor sit amet consectetur<br/>
           adipisicing elit. Voluptates, tempore?</p>
        <button>Order Now</button>
      </div>
      <div id="odet3"className="odet" ref={div3}>
        <div className="cirs"><img src='img/noodles.jpg' alt=""/></div>
        <h1>Noodles</h1>
        <p>Lorem ipsum dolor, sit amet consectetur<br/>
           adipisicing elit. Pariatur, sequi?</p>
        <button>Order Now</button>
      </div>
    </div>
  </div>
  <div className="third">

    <div className="curve"></div>                 
  </div>
  <div className="choose">
    <h1>Choose The Taste That<br/>
      Suit with Your Tounge</h1>     
      </div>
  <div className="sush">
    <div className="price">
      <img id="p1" src='img/top-view-sushi-roll.jpg' alt=""/>
      <h1>Black Sushi</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Amet fugit debitis, similique totam, odio molestias <br/>
        saepe eum,a nihil alias magni! Commodi.</p>
      <button>$40- Order Now</button>
    </div>
    <div className="price">
      <img id="p2" src='img/gsushi.jpg' alt=""/>
      <h1>Orange Sushi</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Amet fugit debitis, similique totam, odio molestias <br/>
        saepe eum,a nihil alias magni! Commodi.</p>
      <button>$40- Order Now</button>
    </div>
    <div className="price">
      <img id="p3" src='img/orgsushi.jpg' alt=""/>
      <h1>Yellow Sushi</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
        Amet fugit debitis, similique totam, odio molestias <br/>
        saepe eum,a nihil alias magni! Commodi.</p>
      <button>$40- Order Now</button>
    </div>
  </div>
  <div className="fourth">

    <div className="curve"></div>                 
  </div>
  <div className="slog">
    <h1>What our Happy Customers <br/>
        Talk About Us</h1>     
      </div>
    
  <div className="view">
    <div className="prof">
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
        <div className="story"></div>
        
      
      

    </div>
    <div className="mess"></div>
  </div>
  <div className="last" ref={foot}>
    <hr/>   
    <div className="btn9"><button>Make A Reservation</button></div>
    <div className="frotr"><span >with</span></div>
        <div className="fphrase">
          <h1>Enjoy Continental Food<br/>
            <span id="gt">Authentic Taste</span></h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#225851" fillOpacity="1" d="M0,128L80,122.7C160,117,320,107,480,112C640,117,800,139,960,160C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
          </div>
          <div className="footer">
    
  </div>
  

  </div>
    </div>
 
    </>
  )
}
