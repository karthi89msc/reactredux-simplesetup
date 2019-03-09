import React from 'react';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { HelloMessage } from './HelloMessage';
import { createStore } from 'redux';
import { createReduxRoot } from '../src/CreateReduxRoot';
import reducer from './reducers/index'
import { SampleAction } from './actions/SampleActions';

// function reducer() {
//     // return undefined;
//     return { name: 'karthik' }
// }



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
const MainAppPage = connect(mapStateToProps, { SampleAction })
    (App);
const Root = createReduxRoot(reducer, MainAppPage)
render(<Root />, document.getElementById('root'));
