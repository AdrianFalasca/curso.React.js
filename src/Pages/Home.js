import Producto from "../Components/Producto"
import React, {useState,useEffect} from "react"
import firebase from "../Config/Firebase"
import '../Assets/Css/Estilos.css'; 
import SpinnerComp from "../Components/Spinner"





function Home(){

    
    const [loading,setLoading] = useState(true);
    const [productos,setProductos]=useState([])
    
    const getProductos = async ()=>{

        try{
            setLoading(true);
            const querySnapshot = await firebase.db.collection("Productos")
          .get()
          setProductos(querySnapshot.docs)
          setLoading(false);
          
        }
        catch(e){
            console.log("error",e)
        }
        
    }
   

    useEffect(()=>{
            
        getProductos()
            },
            []
        )
    
    if(loading){
        return(
            <SpinnerComp />
            
        )
    }else{
        return(
            
            
            <div className="estilos" style={{display:"inline-block"}} >
            
               <h2>Cordófonos</h2><br/>
               
               {productos.map(producto=>
               <Producto key={producto.id} datos={{...producto.data(),id:producto.id}} />)}
       
            </div>
         
            
        )
    }

}
  
    


export default Home;