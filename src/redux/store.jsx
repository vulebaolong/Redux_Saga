import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga"; // Import Redux Saga middleware
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga"; // Import rootSaga (file chứa các generator function của Saga)

// Khởi tạo Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Kích hoạt Saga Middleware và chạy các generator function trong rootSaga
sagaMiddleware.run(rootSaga);

export default store;
