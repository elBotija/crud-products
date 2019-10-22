import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Producto from './components/Producto'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import AgregarProducto from './components/AgregarProducto'
import {Header} from './components/Header'
import axios from 'axios';


function App() {

  const [ getProducts, setProducts ] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const result = await axios.get('http://localhost:3004/restaurant');
      setProducts(result.data)
    }
    getApi()
  },[])

  return (
    <Router>
      <Header/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto}/>
          <Route exact path="/productos" render={()=>(
            <Productos products={getProducts}/>
          )}/>
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
        </Switch>
      </div>
      <p className="mt-4 p2 text-center">Power by elbotija</p>
    </Router>
  );
}

export default App;
