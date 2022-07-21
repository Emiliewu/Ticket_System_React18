import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
// And use redux-batched-subscribe as an example of adding enhancers

const preloadedState = {
    from: 'Vancouver',
    to: 'Toronto',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false,
};
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})


export default store;

// export default function configureAppStore(preloadedState) {
//     const store = configureStore({
//       reducer: rootReducer,
//       middleware: [loggerMiddleware, ...getDefaultMiddleware()],
//       preloadedState,
//       enhancers: [monitorReducersEnhancer]
//     })
  
//     if (process.env.NODE_ENV !== 'production' && module.hot) {
//       module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//     }
  
//     return store
//   }