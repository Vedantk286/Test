 
import Cart from './Components/cart';
import Login from './Components/login';
import Main from './Components/main';
import Register from './Components/register';
import Search from './Components/search';
import Secondc from './Components/secondc';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Search' element={<Search/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/Secondc' element={<Secondc/>}/>
    
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
