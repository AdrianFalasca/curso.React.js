import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import EcommerceContext from "../Context/EcommerceContext"
import { Redirect } from 'react-router';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle,faShoppingCart,faMusic} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
  <EcommerceContext.Consumer>

    {context=>
    <Navbar variant="dark" bg="dark" expand="lg" >
    <Navbar.Brand as={Link} to="/"><FontAwesomeIcon style={{fontSize:"28px", color:"white", marginRight:"15px"}}
    icon={faMusic}/> Instrumentos musicales</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example" >

 
   
 
{context.userLogin && context.userInfo &&  

<Nav className="ml-auto">  
        

          <Redirect to="/"/>
          
       <FontAwesomeIcon icon={faUserCircle} style={{fontSize:"28px", color:"white", margin:"5px"}}/>
          <NavDropdown title="Mi cuenta"  id="nav-dropdown-dark-example" menuvariant="dark" style={{ marginRight:"20px"}} >
        
        <Navbar >Hola, {context.userInfo.nombre}</Navbar>
       
       
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/" onClick={()=>context.logoutUser()}>Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Marcas" id="nav-dropdown-dark-example" menuvariant="dark" style={{ marginRight:"20px"}} >
        
        <NavDropdown.Item >Gliga</NavDropdown.Item>
        <NavDropdown.Item >Yamaha</NavDropdown.Item>
        <NavDropdown.Item >Cremona</NavDropdown.Item>
        <NavDropdown.Item >Stradella</NavDropdown.Item>
        <NavDropdown.Item >Stagg</NavDropdown.Item>
        <NavDropdown.Item >Gewa</NavDropdown.Item>
        <NavDropdown.Item >Stentor</NavDropdown.Item>
     </NavDropdown>
        <Nav.Link as={Link} to="/Catalogo" >Catálogo</Nav.Link>
        
        <Nav.Link as={Link} to="/Carro"><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"22px", color:"white", marginRight:"10px" }}/></Nav.Link>
        
        </Nav>      
}

{!context.userLogin &&

<Nav className="ml-auto">
    
      
        <Nav.Link as={Link} to="/Registro"style={{ marginRight:"15px"}} >Registro</Nav.Link>
        <Nav.Link as={Link} to="/Login" style={{ marginRight:"15px"}}>Login</Nav.Link>
    
     </Nav>  
     
}

   
          
    </Navbar.Collapse>
  </Navbar>
}
   </EcommerceContext.Consumer>
  );

 

}

export default Menu;
