import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER
} from '../types/types';

// recibimos el initial state de la app y las action representan lo que pasamos por parametro en el dispatch
export default (state,action) => {
    // ...state lo que hace es hacer una copia exacta del state de la app para no modificar la original
    // y poder cambiarle los valores que queremos
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        case GET_USER:
            return{
                ...state,
                loading: false,
                user: action.payload
            }
        case CLEAR_USERS:
            return{
                ...state,
                loading: false,
                users: [],
                user: {}
            }
        case SET_LOADING:
            return{
                ...state,
                loading : true
            }

        default :
        return state;
    }
}