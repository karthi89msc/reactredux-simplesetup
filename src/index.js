import React from 'react';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { HelloMessage } from './HelloMessage';
import { createReduxRoot } from '../src/CreateReduxRoot';
import reducer from './reducers/index'
import { SampleAction } from './actions/SampleActions';

const App = ({ name, SampleAction }) => {
    console.log('name: ', name);
    SampleAction();
    return (
        <HelloMessage name={name} />
    )
};

const mapStateToProps = ({ SampleReducer }) => ({
    name: SampleReducer.name
});
//Used to conenct store state and action to component
const MainAppPage = connect(mapStateToProps, { SampleAction })
    (App); // This is the main app which will be wrapped with provider
const Root = createReduxRoot(reducer, MainAppPage) // Creates store from the reducer passed in and wraps with Provider
render(<Root />, document.getElementById('root'));
