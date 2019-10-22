import React, {useState, useRef} from 'react';
import ErrorMessage from './ErrorMessage'
import Swal from 'sweetalert2';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

export default withRouter(function EditarProducto({product, history, reload}) {
  const getProduct = useRef('')
  const getPrice = useRef('')

  const [getCategory, setCategory ] = useState(product.category)
  const [getError, setError ] = useState(false)

  const handlerCategory = e => { setCategory(e.target.value)}

  const EditProduct = async e => {
    e.preventDefault()

    let product_ = getProduct.current.value
    let price_ = getPrice.current.value

    if(!product_.length || !price_.length || !getCategory.length){
      setError(true)
      return
    }
    setError(false)

    const editValues = {
      product: product_,
      price: price_,
      category: getCategory
    }

    const url = `http://localhost:3004/restaurant/${product.id}`
    try{ 
      const res = await axios.put(url, editValues)

      if(res.status >= 200 && res.status < 300 ){
        Swal.fire(
          'Se Creo Correctamente',
          'Tu nuevo producto',
          'success'
        )
      }
    } catch(err){
      console.log(err)
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Ocurrio un error!'
      })
    }
    reload(true)
    history.push('/productos')
  }

  const showError = () => {
    if(getError){
      return <ErrorMessage message="Todos los campos son obligatorios"/>
    }
  }

  return(
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Editar Producto</h1>

      {showError()}      

      <form
        className="mt-5"
        onSubmit={EditProduct}
      >
        <div className="form-group">
            <label>Nombre Platillo</label>
            <input 
                type="text" 
                className="form-control" 
                name="nombre" 
                placeholder="Nombre Platillo"
                defaultValue={product.product}
                ref={getProduct}
                />
        </div>

        <div className="form-group">
            <label>Precio Platillo</label>
            <input 
                type="number" 
                className="form-control" 
                name="precio"
                placeholder="Precio Platillo"
                defaultValue={product.price}
                ref={getPrice}
                />
        </div>

        <legend className="text-center">Categoría:</legend>
        <div className="text-center">
        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                value="postre"
                checked={getCategory === "postre"}
                onChange={handlerCategory}
                />
            <label className="form-check-label">
                Postre
            </label>
        </div>
        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                value="bebida"
                checked={getCategory === "bebida"}
                onChange={handlerCategory}
                />
            <label className="form-check-label">
                Bebida
            </label>
        </div>

        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                value="cortes"
                checked={getCategory === "cortes"}
                onChange={handlerCategory}
                />
            <label className="form-check-label">
                Cortes
            </label>
        </div>

        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                value="ensalada"
                checked={getCategory === "ensalada"}
                onChange={handlerCategory}
                />
            <label className="form-check-label">
                Ensalada
            </label>
        </div>
        </div>

        <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
      </form>
  </div>

  )
})