import _ from 'lodash';
import { 
<<<<<<< HEAD
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
=======
    READ_EVENTS,
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
    DELETE_EVENT
} from '../actions';

export default (events = {}, action) => {
    switch(action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data;
            return {...events, [data.id]: data }
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            delete events[action.id];
            return {...events};
        default:
            return events;
    }
}