import React from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import EcommerceContext from "../Context/EcommerceContext"




function Producto(props){
    
     const {datos} = props
     const {name, price, description, id, img, sku} = datos

     const verDetalle = (props.verDetalle!==false?true:false)
     const modificar = (props.modificar===true?true:false)
     const eliminar = (props.eliminar===true?true:false)
    
    return(
      
   <EcommerceContext.Consumer>

       {
           context=>
       
          
           <Card  style={{ width: '15rem', margin:"12px",
            float:"left",  boxShadow:"1px 1px 10px #ccc"}}>
               
           
           <Card.Body>
             <Card.Title>Producto: {name}</Card.Title>
             <Card.Text>Precio: ${price}</Card.Text>
             <Card.Text>SKU: {sku}</Card.Text>
             <Card.Text> Descripción: {description}</Card.Text>
             <Card.Img variant="top"  src={img} />
         </Card.Body>
         
       
          
          {
                verDetalle && context.userLogin &&
               <Button variant="outline-secondary"  as={Link} to={"/producto/"+id}>Ver Detalle</Button>
                
                 
            }
            {
                modificar &&
                <Button variant="outline-secondary" onClick={(e)=>props.clickModificar(datos)}>Modificar</Button>
            }
            {
                eliminar &&
                <Button variant="outline-secondary" onClick={(e)=>props.clickEliminar(datos)}>Eliminar</Button>
            }
         
          </Card> 
        
           
      }
    </EcommerceContext.Consumer >
    )
}
export default Producto