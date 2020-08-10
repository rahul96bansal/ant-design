import { createStore, applyMiddleware} from 'redux'
import logger from "redux-logger"
import {composeWithDevTools} from 'redux-devtools-extension'
import myApp from "./reducers"

const store = createStore(myApp, applyMiddleware(logger))


export default store