import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { rootreducer } from './Reducer/Index';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ReduxSaga/Root.Saga';


const sagaMiddleware = createSagaMiddleware()

const middlewares = [ thunk, sagaMiddleware ]

export const counterStore = () => {
    let store = createStore(rootreducer, applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)
    return store ;
}