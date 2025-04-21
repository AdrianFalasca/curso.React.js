import Producto from "../Components/Producto"
import React, {useState,useEffect} from "react"
import firebase from "../Config/Firebase"
import FormGroup  from '../Components/Forms/FormGroup';
import {Button} from 'react-bootstrap'
import SpinnerComp from "../Components/Spinner"


function ABM(){
    
    const [loading,setLoading] = useState(true);
    const [productoForm,setProductoForm] = useState({id:null,name:"",price:"",description:"",sku:"", img:""})
    const [productos,setProductos] = useState([])
    const [reload,setReload] = useState(false);
    
    const handleSubmit = async (event)=>{
        event.preventDefault()

        try{
            let document=null
            if(productoForm.id===null){
           document = await firebase.db.collection("Productos")
            .add(productoForm) 
             }
             else{
                  document = await firebase.db.doc("Productos/"+productoForm.id)
            .set(productoForm)
             }
            console.log("Document",document)
            setReload(true)

        }
        catch(e){
            console.log("error",e)
        }
    

    }

        
        const getProductos = async ()=>{

            try{
                setLoading(true);
                const querySnapshot = await firebase.db.collection("Productos")
              .get()
              setProductos(querySnapshot.docs)
              setLoading(false);
              setReload(false);
            }
            catch(e){
                console.log("error",e)
            }
            
        }

    useEffect(
        ()=>{
            
            getProductos()
        
    
        
        
    },
    []
)
useEffect(
    ()=>{
        if(reload)
        getProductos()
    

    
    
},
[reload]
)

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setProductoForm({...productoForm,[name]:value})
    }

    const handleClickModificar = (producto)=>{
        setProductoForm(producto)
    }
    const handleClickEliminar = async (producto)=>{
        try{
            const document = await firebase.db.doc("Productos/"+producto.id)
            .delete()
            setReload(true)
            console.log(document)
        }
        catch(e){

        }
    }


    if(loading){
        return(
            <SpinnerComp/>
            
        )
    }else{
        return(
            <div>
                <div className="estilos"style={{display:"inline-block"}}>
                <h2>Listado de productos</h2>
                {productos.map(producto=><Producto key={producto.id} datos={{...producto.data(),id:producto.id}} modificar={true} clickModificar={handleClickModificar} eliminar={true} clickEliminar={handleClickEliminar} />)}
                </div>
                
               <form onSubmit={handleSubmit} className="estilos"style={{ borderStyle:"ridge"}}>
                <h2>Alta de producto</h2>
                <FormGroup label="Nombre" name="name" type="text"  value={productoForm.name} change={handleChange} />
                <FormGroup label="Precio" name="price" type="text"  value={productoForm.price} change={handleChange} />
                <FormGroup label="SKU" name="sku" type="text"  value={productoForm.sku} change={handleChange} />
                <FormGroup label="Descripción" name="description" type="text"  value={productoForm.description} change={handleChange} />
                <FormGroup label="Imagen" name="img" type="text"  value={productoForm.img} change={handleChange} />
             
                
                <Button type="submit">Guardar</Button>
            </form><br/>
           
            </div>    
        )
    }

}
  
export default ABM;