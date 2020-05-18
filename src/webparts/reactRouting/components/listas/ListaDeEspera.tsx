import * as React from 'react';
import { Fragment } from 'react';
import ItemLista from './ItemLista';

const ListaDeEspera = () => {

    let listadoItems = [
        {
            id:1,
            titulo: 'juan Carlos',
            auto: 'Duna 1998'
        },
        {
            id:2,
            titulo: 'juan Carlos II',
            auto: 'Chevy 1956'
        },
        {
            id:3,
            titulo: 'juan',
            auto: 'Fiat 1998'
        },
        {
            id:4,
            titulo: 'Carlos',
            auto: 'Meari 1909'
        }
    ]

    return (
        <div>
            <ul>
                {listadoItems.map((item, index) => (
                    <ItemLista key={item.id} item={item} />
                ))
                }
            </ul>
        </div>
    )
}

export default ListaDeEspera
