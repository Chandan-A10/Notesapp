import { configureStore } from "@reduxjs/toolkit";
import editorReducer from './reducer'

const store=configureStore({
    reducer:{
        Editor:editorReducer
    }
})
export default store;