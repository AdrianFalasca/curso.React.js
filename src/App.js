import {BrowserRouter,Route} from "react-router-dom"
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import Detalle from "./Pages/Detalle"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Registro from "./Pages/Registro";
import Carrito from "./Pages/Carrito";
import ABM from "./Pages/ABM";
import {Container} from 'react-bootstrap';
import GlobalState from "./Context/GlobalState";


function App() {
  
  return (

<GlobalState>
  <BrowserRouter>
  

    <Menu login={Login} />
    <Container > 
    <Route path="/" exact component={Home} />
    <Route path="/Login" exact component={()=><Login/> } />
    <Route path="/producto/:id" exact component={Detalle} />
    <Route path="/Registro" exact component={Registro} />
    <Route path="/Catalogo" exact component={ABM} /> 
    <Route path="/Carro" exact component={Carrito} /> 

    
    </Container>
    <Footer/>
   </BrowserRouter>
  </GlobalState>
  );
}

export default App;
