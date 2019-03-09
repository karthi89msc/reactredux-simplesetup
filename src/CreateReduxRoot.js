import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
const createReduxRoot = ((reducer, ChildComponent) => {
    return class ReduxRoot extends Component {

        render() {
            const store = createStore(reducer)
            return (< Provider store={store} >
                <ChildComponent />
            </Provider >);
        }
    }
});

export { createReduxRoot }