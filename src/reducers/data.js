import { RECEIVE_API_DATA, RECEIVE_CONVERSATION_API_DATA } from '../actions'
export default (state={}, { type, data = '' }) => {
    switch(type){
        case RECEIVE_API_DATA:
            return data
        case RECEIVE_CONVERSATION_API_DATA:
            return data    
        default: 
            return state;

    }
}