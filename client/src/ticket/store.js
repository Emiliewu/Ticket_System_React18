import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// And use redux-batched-subscribe as an example of adding enhancers
import { batchedSubscribe } from 'redux-batched-subscribe';
import logger from 'redux-logger';
// const _ = require('lodash');


const preloadedState = {
    departDate: Date.now(),
    arriveDate: Date.now(),
    departTimeStr: null,
    arriveTimeStr: null,
    departStation: null,
    arriveStation: null,
    trainNumber: null,
    durationStr: null,
    tickets: [],
    isScheduleVisible: false,
    searchParsed: false,
};
// const debounceNotify = _.debounce(notify => notify());
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    // enhancers: [batchedSubscribe(debounceNotify)],
})



export default store;

