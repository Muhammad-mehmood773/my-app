import React, { useState } from "react";

const Roles: React.FC<any> = ({ }) => {

    const [name, setName] = useState('Mehmood');
    const [age, setAge] = useState(27);
    const [log, setLog] = useState(true);


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>
                                    Create Role
                                </h3>
                            </div>
                            <div className="card-body">
                                <p>User Name: {name}</p>
                                <p>User Age: {age}</p>
                                <p>User Log: {log ? 'Logged In' : 'Logged Out'}</p>

                                <div className="p-2">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        placeholder="Enter role name"
                                    />


                                </div>
                                <div className="p-2">

                                    <input type="number"
                                        value={age}
                                        onChange={(e) => setAge(Number(e.target.value))}
                                        className="form-control"
                                    />
                                </div>
                                <div className="p-2">

                                    <div className="form-check p-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={log}
                                            onChange={(e) => setLog(e.target.checked)}
                                            id="userLog"
                                        />
                                        <label className="form-check-label" htmlFor="userLog">
                                            User Log
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roles;
