import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LeadsReducer from './reducerLeads';

const rootReducer = combineReducers({
  form: formReducer,
  leads: LeadsReducer
});

export default rootReducer;
