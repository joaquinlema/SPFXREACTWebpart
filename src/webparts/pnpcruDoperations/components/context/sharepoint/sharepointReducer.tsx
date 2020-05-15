import {
    READ_USER,
    SET_LOADING,
    UPDATE_USERS,
    CREATE_USER,
    DELETE_USER
} from '../types/types';

// recibimos el initial state de la app y las action representan lo que pasamos por parametro en el dispatch
export default (state,action) => {
    // ...state lo que hace es hacer una copia exacta del state de la app para no modificar la original
    // y poder cambiarle los valores que queremos
    switch(action.type){
        case READ_USER:
            return{
                ...state,
                loading: false,
                label: action.payload
            }
        case CREATE_USER:
            return{
                ...state,
                loading: false,
                label: 'item created'
            }
        case DELETE_USER:
            return{
                ...state,
                loading: false,
                label: 'item deleted'
            }
        case UPDATE_USERS:
            return{
                ...state,
                loading: false,
                label: 'Item Updated'
            }
        case SET_LOADING:
            return{
                ...state,
                loading : true,
                label:'...Cargando'
            }

        default :
        return state;
    }
}