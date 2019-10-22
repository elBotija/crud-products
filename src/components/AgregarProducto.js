import React, {useState} from 'react';
import ErrorMessage from './ErrorMessage'
import axios from 'axios'

export default function AgregarProducto() {

  const [getProduct, setProduct ] = useState('')
  const [getPrice, setPrice ] = useState('')
  const [getCategory, setCategory ] = useState('')
  const [getError, setError ] = useState(false)

  const handlerCategory = e => { setCategory(e.target.value)}

  const addProduct = async e => {
    e.preventDefault();
    
    if(!getProduct.length || !getPrice.length || !getCategory.length){
      setError(true)
      return
    }
    setError(false)

    try{
      const res = await axios.post(`http://localhost:3004/restaurant`, {
        product: getProduct,
        price: getPrice,
        category: getCategory
      })
      console.log(res)
    } catch(error) {
      console.log(error)
    }
  }

  const showError = () => {
    if(getError){
      return <ErrorMessage message="Todos los campos son obligatorios"/>
    }
  }

  return(
    <div className="col-md-8 mx-auto ">
      <h1 className="text-center">Agregar Nuevo Producto</h1>

      {showError()}      

      <form
        className="mt-5"
        onSubmit={addProduct}
      >
        <div className="form-group">
            <label>Nombre Platillo</label>
            <input 
                type="text" 
                className="form-control" 
                name="nombre" 
                placeholder="Nombre Platillo"
                onChange={e => setProduct(e.target.value)}
                />
        </div>

        <div className="form-group">
            <label>Precio Platillo</label>
            <input 
                type="number" 
                className="form-control" 
                name="precio"
                placeholder="Precio Platillo"
                onChange={e => setPrice(e.target.value)}
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
}