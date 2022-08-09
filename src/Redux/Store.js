import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootreducer } from './Reducer/Index';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ReduxSaga/Root.Saga';


const sagaMiddleware = createSagaMiddleware()

const middlewares = [ thunk, sagaMiddleware ]

const counterStore = () => {
    let store = createStore(rootreducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)
    return store ;
} 

export const store = counterStore();

export default store;