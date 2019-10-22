import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'

export default withRouter(function ProductoLista({producto, reload}) {

  const deleteProduct = product => {
    return Swal.fire({
      title: `Estas seguro de eliminar "${product.product}"?`,
      text: "Este cambio no se puede revertir!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then(async result => {
      if (result.value) {
        const url = `http://localhost:3004/restaurant/${product.id}` 
        try{
          const res = await axios.delete(url)
          if(res.status >= 200 && res.status < 300){
            Swal.fire(
              'Eliminado!',
              'Se elimino correctamente del listado.',
              'success'
            )
            reload(true)
          }
        } catch(err){
          console.log(err)
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Ocurrio un error!'
          })
        }

      }
    })
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
          onClick={()=> deleteProduct(producto)}
        >
            Eliminar
        </button>
      </div>
    </li>
  )
})