import * as React from 'react';
import styles from './ReactRouting.module.scss';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import NavBarOfficeUi from './navBar/NavBarOfficeUi';
import formularioAuto from './pages/FormularioAuto';
import About from './pages/About';
import ListaDeEspera from './listas/ListaDeEspera';
import { Fragment } from 'react';
import { Stack, StackItem } from 'office-ui-fabric-react';


const ReactRouting = () => {
  return (
    <HashRouter>
      <Stack horizontal gap={15}>
        <NavBarOfficeUi /> 
        <StackItem grow={2}>
          <Switch>
            <Route exact={true} path='/' render={props => (
              <Fragment>
                <h1>Hola soy la pagina inicial</h1>
              </Fragment>
            )} />

            <Route path='/formularioAuto' component={formularioAuto} />
            <Route path='/about' component={About} />
            <Route path='/listaDeEspera' component={ListaDeEspera} />

          </Switch>
        </StackItem>
      </Stack>
    </HashRouter>
  );
}

export default ReactRouting
