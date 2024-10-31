//import logo from './logo.svg';

//importación de estilos
import './App.css';

//importación de componentes
import Header from './Header.js';
import Lista from './Lista.js';
// import ErrorComponent from './ErrorComponent.js';

//importación de constantes
import CONFIG from './config/config.js';
//import { mockdata } from './constants/products.js';

//importación de librerías y funciones
import {useState} from 'react';


export default function SearchPage(props) {
  //constantes y estados
  //estados
  
  //inputs
  const [filtro, setFiltro] = useState(CONFIG.default_lat);
  //const [longitud, setLongitud] = useState(CONFIG.default_lon);
  //datos
  //const [misDatos, setDatos] = useState();
  //const [hayErrores, setHayErrores] = useState();

  //funciones que llaman a setters
  function cambiaFiltro(clave){
    console.log("User wrote búsqueda as:"+clave+", Type:"+typeof(clave));
    setFiltro(clave);
  }
  // function checkLongitud(lon){
  //   console.log("User wrote longitud as:"+lon+", Type:"+typeof(lon));
  //   setLongitud(lon);
  // }
  

  //useEffect
  // useEffect(() => {
  //   //llamar al servidor para cargar los datos
  //   setTimeout(CONFIG.loading_timeout_ms);
  //   CONFIG.use_server ? callServer() : setDatos(mockdata);
    
  // }, []);

  //función fetch
  // async function callServer(){
  //   try {
  //     const response = await fetch(CONFIG.server_url);
  //     const datos = await response.json();
  //     console.log("Datos devueltos del servidor:"+{datos});
  //     setDatos(datos);
  //     if (response.status === 200){
  //       // se ha devuelto un 200 OK
  //       setHayErrores();
  //     }else{
  //       //se ha devuelto un error por parte de la API
  //       setHayErrores(true);
  //     }
  //   } catch (error) {
  //     alert("No se ha podido conectar con el servidor");
  //     console.log("No se pudo conectar, Error:"+error);
  //   }
  // }

  //otras funciones
  // function onSubmit() {
  //   console.log("User asked for latitud as:"+latitud+", Type:"+typeof(latitud));
  //   console.log("User asked for longitud as:"+longitud+", Type:"+typeof(longitud));
  //   if (CONFIG.use_server){
  //     callServer();
  //   } else {
  //     setDatos(mockdata);
  //   }
  // }

  function onSubmit(){
    //función de búsqueda o filtro
    console.log("El usuario buscó:"+filtro);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <h2 id="titulo">El tiempo</h2>
      <div id="buscador">
        Buscador<br/>
        Buscar: <input type="number" id="latitud" value={filtro} onChange={(e) => cambiaFiltro(e.target.value)}></input><br/>
        {/* Longitud: <input type="number" id="longitud" value={longitud} onChange={(e) => checkLongitud(e.target.value)}></input><br/> */}
        <button id="buscar" onClick={onSubmit}>Buscar</button>
      </div>
      
      {props.objetos ? <Lista numitems={CONFIG.num_items} items={props.objetos.products}/> : 'Pulsa buscar para obtener el tiempo'}
      {/* {props.error && <ErrorComponent items={props.objetos}/>} */}
    </div>
  );
}

