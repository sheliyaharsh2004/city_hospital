import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootreducer } from './Reducer/Index';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ReduxSaga/Root.Saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}
   
const persistedReducer = persistReducer(persistConfig, rootreducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ thunk, sagaMiddleware ]

const counterStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)
    return store ;
} 

export const store = counterStore();

export let persistor = persistStore(store)

// export default store;