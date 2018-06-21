import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom'; //rotas



class App extends Component {
  render() {
    return (
      <div>
        <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>                        
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
                <Route path="/" exact component={Resumo} />      
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
