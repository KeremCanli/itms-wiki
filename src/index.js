import AutoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import React from "react";
import ReactDOM from "react-dom";
import ReduxLogger from "redux-logger";
import ReduxPersistTransformEncrypt from "redux-persist-transform-encrypt";
import ReduxThunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {applyMiddleware, compose, createStore} from "redux";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistReducer, persistStore} from "redux-persist";
import * as ServiceWorker from "./service-worker.js";
import Root from "./redux/reducers/root.js";
import Application from "./pages/application/application.js";

const encryptor = ReduxPersistTransformEncrypt({
    onError: error => {
        if (error)
            localStorage.clear();
    },
    secretKey: "GXZbK9bNi6nwpKo43InpVsy8AjVrYAxL"
});
const middlewares = [ReduxThunk];
process.env.NODE_ENV === "development" && middlewares.push(ReduxLogger);
const enhancer = compose(applyMiddleware(...middlewares));
const persistConfig = {
    blacklist: [
        "metric",
        "metricOperations"
    ],
    key: "root",
    stateReconciler: AutoMergeLevel2, // HardSet, AutoMergeLevel1, AutoMergeLevel2
    storage,
    transforms: [encryptor]
    // whitelist: []
};
const store = createStore(persistReducer(persistConfig, Root), enhancer);
const persistor = persistStore(store);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Application/>
        </PersistGate>
    </Provider>, document.getElementById("root"));
ServiceWorker.unregister();