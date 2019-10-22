import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductoLista({producto}) {

  const deleteProduct = id => {
    console.log(id)
  }

  return(
    <li className="list-group-item d-flex justify-content-between align-items-center
    " data-category={producto.category} key={producto.id}>
      <p>
        {`${producto.product} `}
        <span className="font-weight-bold">${producto.price}</span>
      </p>
      <div>
        <Link to={`/productos/editar/${producto.id}`} className="btn btn-success mr-2">Editar</Link>
        <button type="button" 
          className="btn btn-danger" 
          onClick={()=> deleteProduct(producto.id)}
        >
            Eliminar
        </button>
      </div>
    </li>
  )
}