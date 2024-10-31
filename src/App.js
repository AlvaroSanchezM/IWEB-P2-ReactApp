//importación de estilos
import './App.css';
import spinner from './logo.svg';

//importación de componentes
import SearchPage from './SearchPage.js'
import Objeto from './Objeto';
import NotFound from './NotFound';


//importación de constantes
import CONFIG from './config/config';
import { mockdata } from './constants/products';


//importación de librerías y funciones
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  //constantes y estados
  //inputs
  
  //datos
  const [loaded, setLoading] = useState();
  const [objetos, setObjetos] = useState();
  // const [hayErrores, setHayErrores] = useState();

  //funciones que llaman a setters
  function cambiaObjetos(objetos){
    console.log("objetos es:");
    setObjetos(objetos)
  }
  function cargado(){
    console.log("La página ha cargado");
    setLoading(true);
  }

  //función fetch
  useEffect(() => {
    async function callServer(){
      try {
        const response = await fetch(CONFIG.server_url);
        const datos = await response.json();
        console.log("Datos devueltos del servidor:"+{datos});
        cambiaObjetos(datos);
        if (response.status === 200){
          // se ha devuelto un 200 OK
          // setHayErrores();
        }else{
          //se ha devuelto un error por parte de la API
          //setHayErrores(true);
        }
      } catch (error) {
        alert("No se ha podido conectar con el servidor");
        console.log("No se pudo conectar, Error:"+error);
      }
    }
    if (CONFIG.use_server){
      callServer();
      cargado();
    }else{
      setTimeout(cambiaObjetos(mockdata), CONFIG.loading_timeout_ms);
      cargado();
    }
    
  }, []);
  

  //otras funciones
  

  return (
    <div className="App">
      <h2>Tienda Online</h2>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
        <Link to="/">Home</Link>|{" "}
        <Link to="/objetos/1">elem 1</Link> |{" "}
        <Link to="/objetos/2">elem 2</Link> |{" "}        
        <Link to="/rutarota">Ruta rota</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Página principal</div>} />
        <Route path="/objetos/:objetoId" element={<Objeto objs={objetos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {loaded ? <SearchPage items={objetos}/> : <img src={spinner} className='spinner' alt="Spinner"/>}
    </div>
  );
}

export default App;
