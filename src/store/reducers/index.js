import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import overviewReducer from './overviewReducer';

const rootReducer = combineReducers({ 
    global: globalReducer, 
    overview: overviewReducer 
});

export default rootReducer;