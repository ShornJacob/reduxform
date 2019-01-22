import { createStore } from 'redux'
import {reducer as formReducer} from 'redux-form'

const store = createStore(formReducer)

export default store

