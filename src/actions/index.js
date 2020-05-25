import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';
<<<<<<< HEAD
export const UPDATE_EVENT = 'UPDATE_EVENT';
=======
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
export const DELETE_EVENT = 'DELETE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
    dispatch({ type: READ_EVENTS, response });
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
    dispatch({ type: CREATE_EVENT, response });
}

<<<<<<< HEAD
export const putEvent = values => async dispatch => {
    console.log(values)
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values);
    dispatch({ type: UPDATE_EVENT, response });
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
    dispatch({ type: READ_EVENT, response });
}

=======
>>>>>>> 85360722ddb035fd8f70f1b2be3aff2037e9c9ca
export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`, id);
    dispatch({ type: DELETE_EVENT, id });
}
