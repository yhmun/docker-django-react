import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {    
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div key={item.aptId} className="pet-item col media py-3">
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteAppointment(item)}>
                                <FaTimes />
                            </button>
                        </div>
            
                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span 
                                    className="pet-name" 
                                    contentEditable 
                                    suppressContentEditableWarning
                                    onBlur={e => 
                                        this.props.updateInfo(
                                            'petName', 
                                            e.target.innerText, 
                                            item.aptId
                                        )
                                    }
                                >
                                    {item.petName}
                                </span>
                                <span className="apt-date ml-auto">
                                    <Moment 
                                        date={item.aptDate} 
                                        parse="YYYY-MM-dd hh:mm" 
                                        format="MMM-D h:mma"
                                    />
                                </span>
                            </div>

                            <div className="owner-name">
                                <span className="label-item">Owner: </span>
                                <span
                                    contentEditable 
                                    suppressContentEditableWarning
                                    onBlur={e => 
                                        this.props.updateInfo(
                                            'ownerName', 
                                            e.target.innerText, 
                                            item.aptId
                                        )
                                    }
                                >
                                    {item.ownerName}
                                </span>
                            </div>
                            <div 
                                className="apt-notes"
                                contentEditable 
                                suppressContentEditableWarning
                                onBlur={e => 
                                    this.props.updateInfo(
                                        'aptNotes', 
                                        e.target.innerText, 
                                        item.aptId
                                    )
                                }
                            >
                                {item.aptNotes}
                            </div>
                        </div>
                    </div>
                ))}                
            </div>
        );
    }
}

export default ListAppointments;
