import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Producto from './components/Producto'
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto'
import AgregarProducto from './components/AgregarProducto'
import {Header} from './components/Header'


function App() {
  return (
    <Router>
      <Header/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/nuevo-producto" component={AgregarProducto}/>
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/productos/:id" component={Producto}/>
          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
        </Switch>
      </div>
      <p className="mt-4 p2 text-center">Power by elbotija</p>
    </Router>
  );
}

export default App;
