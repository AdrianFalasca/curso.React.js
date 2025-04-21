import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'

function Volver(props){

    const registro = (props.registro===true?true:false)
    const loguin = (props.loguin===true?true:false)
    const volver = (props.volver===true?true:false)

    return(
        <>
        
        { volver &&
                <div >
              <Button variant="outline-info" as={Link} to="/">Volver</Button>
               </div>

        }
       

       { registro &&
       
        <p>Si ya tenés cuenta, <Link to="/Login">logueate</Link></p>
        
        }

        
     { loguin &&
         <p>Si no tenés cuenta, <Link to="/Registro">registrate</Link>
        </p>

        }
</>
    )
}

export default Volver;



