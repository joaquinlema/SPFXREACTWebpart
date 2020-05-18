import * as React from 'react';
import {Fragment } from 'react';

const ItemLista = ({item : {id,titulo,auto}}) => {
    return (
        <li>
            <p>Persona asignada {titulo}</p>
            <p>Auto modelo {auto}</p>
        </li>
    ); 
}

export default ItemLista;
