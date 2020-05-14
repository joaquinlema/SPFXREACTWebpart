// inicializa nuestro state o el state del compoenente
// es donde se realizan todas las llamadas a las funciones o acciones a lelvar adelante
import * as React from 'react';
import {useReducer} from 'react';
import SharepointReducer from './sharepointReducer';
import SharepointContext from './sharepointContext'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types/types';

const SharepointState = (props: any) => {
    //global state para todo lo relacionado con github y su sestado
    const initialState = {
        users: [],
        user: {},
        loading: false,
        repos:[]
    }

    // aca manejamos el ida y vuelta de los servicios o las acciones que llevemos a cabo
    const [state, dispatch] = useReducer(SharepointReducer, initialState);

    // aca abajo definimos la implementacion de nuestras funciones por type
    
    // CREARMOS FUNCION QEU LA MANEJA EL DISPATCH
    const setLoading = () => dispatch( {type: SET_LOADING} );

    // wrap de la app en el provider y definimos de donde son accesibles las variables objetos de nuestra app
    // debemos definir los valores que seran accesibles desde el context
    return ( 
        
    <SharepointContext.Provider
        value = {{
            users: state.users,
            user: state.user,
        }}
    >
        {props.children}
    </SharepointContext.Provider>
    
    )
}

export default SharepointState;