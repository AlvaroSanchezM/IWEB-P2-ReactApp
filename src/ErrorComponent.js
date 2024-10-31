export default function ErrorComponent(props){
    //definición de constantes

    //funciones varias

    return(
        <div id="error">
            <h2>Error</h2><br/>
            <h3>Se ha producido un error.</h3><br/>
            <h5>Descripción: Obtenido error al llamar al API. Código {props.datos.cod}</h5><br/>
            <h5>Mensaje del servidor: {props.datos.message  }</h5>
        </div>
    );
}