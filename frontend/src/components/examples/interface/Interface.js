import React, {Component} from 'react';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class Interface extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 bg-white">
                    <div className="container">
                        <AddAppointments />
                        <SearchAppointments />
                        <ListAppointments />
                    </div>
                </div>
            </div>
        );
    }
}

export default Interface;
