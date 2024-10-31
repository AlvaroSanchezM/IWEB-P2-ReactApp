//COSAS A IMPORTAR
import Tarjeta from './Tarjeta.js';

export default function Lista(props){
    //definición de constantes

    //funciones varias

    return(
        <div id="lista">
            <div id="cabeceraLista">
            Lista<br/>
            
            <h2>Productos disponibles:</h2><br/>
            </div>
            {  
                props.items.map((itemData, index) => {
                    return(
                        index < props.numitems ? <Tarjeta data={itemData} key={index} num={index}/> : ''
                    );
                })
            }
        </div>
    );
}