import { useParams } from "react-router-dom";

export default function Objeto(props){
  let {objetoId} = useParams();

  let objeto = props.objs[objetoId];

  return <div className="my-object">
    <b>{props.productName}</b>
    <ul>
      <li>Título: {objeto.title} </li>
      <li>Descripción: {objeto.description} </li>
      <li>Precio: {objeto.price}€</li>
      <li>Descuento: {objeto.discountpercentage}€</li>
      <li>Precio: {objeto.price}€</li>
      <li>Precio: {objeto.price}€</li>
      <li>Precio: {objeto.price}€</li>
      <li>Precio: {objeto.price}€</li>
      <li>Precio: {objeto.price}€</li>
      <li>Precio: {objeto.price}€</li>
    </ul>
    </div>
}
