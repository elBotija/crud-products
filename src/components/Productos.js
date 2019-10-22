import React from 'react';
import ProductoLista from './ProductoLista'

export default function Productos({products}) {
  return(
    <React.Fragment>
      <h1 className="text-center">
        Productos     
      </h1>
      <ul className="list-group mt-5">
        {products.map(p => (
          <ProductoLista producto={p}/>
        ))}
      </ul>
    </React.Fragment>

  )
}