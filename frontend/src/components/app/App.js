import React, {Component} from 'react';
import Interface from '../examples/interface/Interface';

class App extends Component {
    render() {
        return (
            <main className="page bg-white" id="petratings">
                <div className="container">
                    <Interface />
                </div>
            </main>
        );
    }
}

export default App;
