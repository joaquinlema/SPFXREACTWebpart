// inicializa nuestro state o el state del compoenente
// es donde se realizan todas las llamadas a las funciones o acciones a lelvar adelante
import * as React from 'react';
import {useReducer} from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import SharepointContext from './sharepointContext';
import SharepointReducer from './sharepointReducer';
import {
    READ_USER,
    SET_LOADING,
    UPDATE_USERS,
    CREATE_USER,
    DELETE_USER
} from '../types/types';

const SharepointState = (props: any) => {
    const initialState = {
        label: '',
        loading: false,
        titulo: 'spfx'
    }

    // aca manejamos el ida y vuelta de los servicios o las acciones que llevemos a cabo
    const [state, dispatch] = useReducer(SharepointReducer, initialState);

    // aca abajo definimos la implementacion de nuestras funciones por type
    const create = () => {
       
        setLoading();

        sp.web.lists.getByTitle("Projects").items.add({
            Title: "PnPJS",
            Technology: "Javascript",
            Resources: "6",
        }).then((i) => {
            dispatch({
                type: CREATE_USER
            })
        });
    }

    const read = () => {
        setLoading();

        sp.web.lists.getByTitle("Projects").items.getById(2).get()
        .then((item: any) => {
            dispatch({
                type: READ_USER,
                payload: item.Title
            })
        })

    }

    const updateItem = () => {
        setLoading();

        let list = sp.web.lists.getByTitle("Projects");
        list.items.getById(2).update({
            Title: "My New Title - SPFx",
            Technology: "Updated - SharePoint"
        }).then((i) => {
            dispatch({
                type: UPDATE_USERS
            })
        });
    }

    const deleteItem = () => {
        setLoading();

        let list = sp.web.lists.getByTitle("Projects");
        list.items.getById(2).delete()
            .then(_ => { 
                dispatch({
                    type: DELETE_USER,
                })
            });
    }

    const setLoading = () => dispatch( {type: SET_LOADING} );

    // wrap de la app en el provider y definimos de donde son accesibles las variables objetos de nuestra app
    // debemos definir los valores que seran accesibles desde el context
    //utilizamos compose
    return ( 
    <SharepointContext.Provider
        value = {{
            label: state.label,
            loading: state.loading,
            titulo: state.titulo,
            create,
            read,
            updateItem,
            deleteItem
        }}
    >
        {props.children}
    </SharepointContext.Provider>
    
    )
}

export default SharepointState;