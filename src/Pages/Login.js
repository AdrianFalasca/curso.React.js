import React,{useState, useContext} from "react";
import firebase from "../Config/Firebase"
import FormGroup  from '../Components/Forms/FormGroup';
import Form from "react-bootstrap/Form";
import ButtonWithLoading from '../Components/Forms/ButtonWithLoading';
import AlertCustom from '../Components/AlertCustom';
import EcommerceContext from "../Context/EcommerceContext"
import Volver from "../Components/Volver"
import '../Assets/Css/Estilos.css';
import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'


function Login(){ 
    
    const context = useContext(EcommerceContext)
    const [form,setForm] = useState({email:'',password:''})
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    
    const handleSubmit = async (event)=>{
        
        setLoading(true)
        event.preventDefault()
       
        
        try{
          const responseUser = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
           const userInfo = await firebase.db.collection("Usuarios")
            .where("userId","==",responseUser.user.uid)
           .get()
            
           setLoading(false) 
           context.loginUser(userInfo.docs[0]?.data()) 
           
           
         
           

      
        }catch(e){
           
            
            if(e.code==="auth/wrong-password") {
                setAlert ({variant:"danger", text:"Email o contraseña incorrecta"})
            }
            if(e.code==="auth/user-not-found") {
                
                setAlert ({variant:"danger", text:"Email o contraseña incorrecta"})
            }

            if(e.code==="auth/invalid-email") {
               
                setAlert ({variant:"danger", text:"Email o contraseña incorrecta"})
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
        
        <div className="estilos" style={{maxWidth: "400px"}}>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2><br/>
               
               <FormGroup
                  label="Email" 
                  name="email"
                  type="email" 
                  placeholder="Ingrese su email" 
                  value={form.email} 
                  change={handlechange} 
                />
              <FormGroup
                 label="Password" 
                 name="password" 
                 type="password" 
                 placeholder="Ingrese su password"
                 value={form.password} 
                 change={handlechange} 
             />
            
          <Form.Check  style={{margin:"10px"}}
           type="checkbox" 
           label="Recordarme" 
           />
           
           <Link>¿Olvidaste la contraseña?</Link><br/>
           
           <AlertCustom  variant={alert.variant} text={alert.text} />
          
           <ButtonWithLoading loading={loading} type="submit">Ingresar</ButtonWithLoading>
            
            </form><br/>
            <Dropdown.Divider />
            <Volver loguin={true}/>
            
            
            </div>

    )
}

export default Login;