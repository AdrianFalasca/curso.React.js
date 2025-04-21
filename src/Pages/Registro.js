import React,{useState} from "react";
import firebase from "../Config/Firebase"
import FormGroup  from '../Components/Forms/FormGroup';
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import AlertCustom from '../Components/AlertCustom';
import Volver from "../Components/Volver"
import '../Assets/Css/Estilos.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Dropdown from 'react-bootstrap/Dropdown';

function Registro(){

    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:'',telefono:"",conf_password:""})
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    
    const handleSubmit = async (event)=>{
        console.log("handleSubmit",form)
        setLoading(true)
        event.preventDefault()
      
        try{
          
            if(form.conf_password!==form.password){
                setAlert ({variant:"danger", text:"Los password deben coincidir"})
            }
            else if(form.nombre===""){
                setAlert ({variant:"danger", text:"Debe ingresar un nombre"})
            }
            else if(form.apellido===""){
                setAlert ({variant:"danger", text:"Debe ingresar un apellido"})
            }
            else{
                 
                const responseUser = await firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
                
                const document = await firebase.db.collection("Usuarios")
                .add({
                    nombre:form.nombre,
                    apellido:form.apellido,
                    telefono:form.telefono,
                    userId:responseUser.user.uid
                })
                   console.log(document)
                   setAlert ({variant:"success", text:"Registro exitoso"})
                  
                 
                          
            }
            setLoading(false)
      
        }catch(e){
            
           
           if(e.code==="auth/invalid-email"){
            setAlert ({variant:"danger", text:"El email es incorrecto"})
            }
            if(e.code==="auth/weak-password"){
                setAlert ({variant:"danger", text:"El password es incorrecto"})
            }
            if(e.code==="auth/email-already-in-use"){
                setAlert ({variant:"danger", text:"El email ya existe"})
            }
            setLoading(false)
        }
    }
    const handlechange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setForm({...form,[name]:value})
    }
    return(
        <div className="estilos" style={{maxWidth: "600px"}}>
            <form onSubmit={handleSubmit}>
                <h2>Registro</h2><br/>
       
        <Row>
              <Col><FormGroup label="Nombre" name="nombre" type="nombre" placeholder="Ingrese su nombre" value={form.nombre} change={handlechange} /></Col>
              <Col><FormGroup label="Apellido" name="apellido" type="apellido" placeholder="Ingrese su apellido" value={form.apellido} change={handlechange} /></Col>
         </Row> 
         
         <Col> <FormGroup label="Teléfono" name="telefono" type="number" placeholder="Ingrese su teléfono (optativo)" value={form.telefono} change={handlechange} /></Col>
         <Col>   <FormGroup label="Email" name="email" type="email" placeholder="Ingrese su email" value={form.email} change={handlechange} /></Col>
         
         
              
             <Row>
              <Col>  <FormGroup label="Password" name="password" type="password" placeholder="Ingrese su password" value={form.password} change={handlechange} /></Col>
              <Col> <FormGroup label="Confirmar password" name="conf_password" type="password" placeholder="Ingrese su password nuevamente" value={form.conf_password} change={handlechange} /></Col>
              </Row>

              <AlertCustom  variant={alert.variant} text={alert.text} />

              <ButtonWithLoading loading={loading} type="submit">Enviar</ButtonWithLoading>
                
            </form><br/>
            <Dropdown.Divider />
           <Volver registro={true}/>
            

        </div>
    )
}

export default Registro;