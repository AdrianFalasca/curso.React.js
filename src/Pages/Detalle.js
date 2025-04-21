import React, {useState,useEffect} from "react"
import firebase from "../Config/Firebase"
import Producto from "../Components/Producto"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import Volver from "../Components/Volver"
import SpinnerComp from "../Components/Spinner"



function Detalle(props){
    const id = props.match.params.id
    const [loading,setLoading] = useState(true);
    const [producto,setProducto]=useState({})
   
   


    useEffect(()=>{
           
        async function request(){
            try{
                const document = await firebase.db.doc("Productos/"+id)
                .get()
                setLoading(false);
                setProducto(document.data());

            }catch(e){

            }
        }
        request();

                
        },
        [id]
    )
  

    if(loading){
        return(
            <SpinnerComp/>
        )
    }
    else{
      
        return(

        <div className="estilos" style={{display:"inline-block"}}>
        
                
            <h2>Detalle del producto</h2>
            <Producto datos={producto} verDetalle={false}/>

           <div style={{ margin:"18px"}}>
            <Button variant="primary"  as={Link} to="/Carro">Agregar al carrito</Button>
             <br/><br/>
          <Volver volver={true}/>
        </div>

        </div>
        )
        
        }
    }

export default Detalle;
