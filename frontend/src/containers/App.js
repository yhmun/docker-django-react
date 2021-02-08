import React from 'react';
import Blog from './Blog';
import {Provider as ReduxProvider} from 'react-redux';
import configreStore from '../redux/store';

const reduxStore = configreStore(window.REDUX_INITIAL_DATA);

function App() {
    return (
        <ReduxProvider store={reduxStore}>
            <div className="App">
                <Blog />
            </div>
        </ReduxProvider>
    );
}

export default App;
