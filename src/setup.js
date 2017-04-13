/**
 * Created by wangsiyuan on 4/12/17.
 */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { default as thunk } from 'redux-thunk';
import { default as rootReducer } from './reducers';

import { default as Main } from './pages/main';

const store = createStore(
    // rootReducer,
    applyMiddleware(thunk)
);

const setup = () => {

    console.disableYellowBox = true;

    class root extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Main />
                </Provider>
            );
        }
    }

    return root;
};

export default setup;