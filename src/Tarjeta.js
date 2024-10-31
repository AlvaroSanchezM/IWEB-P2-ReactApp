//COSAS A IMPORTAR

import CONFIG from "./config/config";

export default function Tarjeta(props){
    //definición de constantes
    const date = new Date(props.data.dt * 1000).toLocaleDateString();

    //funciones varias

    return(
        <div class="tarjeta">
            {/* Tarjeta {props.num}<br/> */}
            <h4>{date}</h4><br/>
            <img className="tiempoimg" src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+".png"} alt={props.data.weather[0].description} /><br/>
            Temp: {(props.data.temp.day-273).toPrecision(4)}ºC<br/>
            Humedad: {props.data.humidity}%<br/>
            Viento: {props.data.wind_speed}m/s<br/>
            <br/>
        </div>
    );
}