import Volver from "../Components/Volver"


function Carrito(){
    return(
    <div className="estilos">
        <h2>Carrito de compras (sólo maquetado)</h2>
        <p>Tu carrito está vacío</p>
        <Volver volver={true}/>
    </div>
    )
}
export default Carrito;