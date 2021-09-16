import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//Export Types for Typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch