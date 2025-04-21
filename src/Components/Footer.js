import {Navbar,Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram,faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
      

      <Navbar variant="dark" bg="dark" expand="lg" style={{padding:"2px",bottom:"0px",
      width:"100%", position:"fixed", color:"white"}}>
             
      <FontAwesomeIcon icon={faFacebook} style={{fontSize:"28px", marginLeft:"15px"}}/>
      <FontAwesomeIcon icon={faInstagram} style={{fontSize:"28px", marginLeft:"15px"}}/>
      <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"28px", marginLeft:"15px"}}/>


      <Nav  className="ml-auto">Curso de Programación en React</Nav>
    
      </Navbar>

    )
 
}
export default Footer