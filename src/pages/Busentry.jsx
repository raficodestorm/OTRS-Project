import React, { useState } from 'react';
import './Admins.css';  // Don't forget to create this CSS file

const BusEntry = () => {
    // State to hold form data
    const [busData, setBusData] = useState({
        busNumber: '',
        busName: '',
        capacity: '',
        route: '',
        departureTime: '',
        arrivalTime: '',
        driverName: '',
    });
    
    // State for simple success/error message
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Submitting bus entry...');

        // 🚨 In a real application, you would send busData to an API here.
        console.log("Bus Data Submitted:", busData);
        
        // Simulate a successful API call
        setTimeout(() => {
            setMessage('✅ Bus entry saved successfully!');
            // Optionally clear the form
            setBusData({
                busNumber: '',
                busName: '',
                capacity: '',
                route: '',
                departureTime: '',
                arrivalTime: '',
                driverName: '',
            });
        }, 1500);
    };

    return (
        <div className="bus-entry-page p-4">
            <h1 className="mb-4">🚌 Bus Entry Management</h1>
            <p className="lead text-muted">Use this form to add new buses to the system.</p>
            
            <div className="bus-entry-form-container card shadow-sm p-4 mt-4">
                <form onSubmit={handleSubmit}>
                    
                    {/* Bus Identification Section */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="busNumber" className="form-label">Bus Number (License Plate)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="busNumber" 
                                name="busNumber"
                                value={busData.busNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="busName" className="form-label">Bus Name/Model</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="busName" 
                                name="busName"
                                value={busData.busName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Capacity & Driver Section */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="capacity" className="form-label">Seating Capacity</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="capacity" 
                                name="capacity"
                                value={busData.capacity}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="driverName" className="form-label">Assigned Driver's Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="driverName" 
                                name="driverName"
                                value={busData.driverName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Route and Schedule Section */}
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="route" className="form-label">Route Description (e.g., City A to City B)</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="route" 
                                name="route"
                                value={busData.route}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="departureTime" className="form-label">Scheduled Departure Time</label>
                            <input 
                                type="time" 
                                className="form-control" 
                                id="departureTime" 
                                name="departureTime"
                                value={busData.departureTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="arrivalTime" className="form-label">Scheduled Arrival Time</label>
                            <input 
                                type="time" 
                                className="form-control" 
                                id="arrivalTime" 
                                name="arrivalTime"
                                value={busData.arrivalTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submission and Message */}
                    <button type="submit" className="btn btn-primary w-100">
                        Add New Bus
                    </button>
                    
                    {message && (
                        <p className={`mt-3 p-2 text-center ${message.startsWith('✅') ? 'text-success' : 'text-danger'}`} role="alert">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default BusEntry;