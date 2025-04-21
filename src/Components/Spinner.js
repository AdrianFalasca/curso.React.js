import Spinner from 'react-bootstrap/Spinner'

export default function SpinnerComp(){
    return(

        <Spinner animation="border" role="status" style={{marginTop:"50px", marginLeft:"50%"}} >
            <span className="sr-only"></span>
          </Spinner>
    )
}