import React from 'react';
import ProductoLista from './ProductoLista'

export default function Productos({products, reload}) {
  return(
    <React.Fragment>
      <h1 className="text-center">
        Productos     
      </h1>
      <ul className="list-group mt-5">
        {products.map(p => (
          <ProductoLista key={p.id} producto={p} reload={reload}/>
        ))}
      </ul>
    </React.Fragment>

  )
}