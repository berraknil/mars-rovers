import { FETCH_MANIFEST } from '../actions/index';
const initialState = { data: {} };


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MANIFEST:
      return Object.assign({}, state, {
        data: action.payload.data
      }) 
    default:
      return state;
  }
}