import { combineReducers } from 'redux';
import ManifestReducer from './reducer_manifest';

const rootReducer = combineReducers({
  manifest: ManifestReducer
});

export default rootReducer;
