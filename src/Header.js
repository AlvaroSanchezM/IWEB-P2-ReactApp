//COSAS A IMPORTAR
import logo from './logo.png';

export default function Header(props){
    //definición de constantes

    //funciones varias

    return(
        <div id="cabecera">
            {/* Header */}
            <img src={logo} className="logo" alt="logo" />
            <h3 className="mensaje">Bienvenido a la página de Álvaro Sánchez Martínez</h3>
        </div>
    );
}