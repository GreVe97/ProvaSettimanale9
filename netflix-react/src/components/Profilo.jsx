import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Profilo() {
    return (
        <div className="profile-page my-4">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-4">

                        <h1 className="text-light profile-title">Edit Profile</h1>
                        <hr />

                        <div className="row mt-4 pb-2">
                            <div className="col-12 col-md-auto">
                                <img src="./assets/avatar.png" className="img-fluid" width="150px" alt="User Avatar" />
                            </div>
                            <div className="col-12 col-md">
                                <input className="form-control border-0 rounded-0" value="Epicoder #1" type="text" readOnly />
                                <div className="mb-4 mt-4">
                                    <h4 className="profilo">Language:</h4>
                                    <select id="languages" className="pe-2 ps-1 py-1 bg-dark fw-bold" >
                                        <option value="1">English</option>
                                        <option value="2">Tetesko</option>
                                        <option value="3">Calabrese</option>
                                        <option value="4">Napoletano</option>
                                    </select>
                                </div>
                                <hr />
                                <div className="mt-2 pb-2">
                                    <h4 className="profilo">Maturity Settings:</h4>
                                    <button className="btn btn-dark fw-bold my-2">ALL MATURITY SETTINGS</button>
                                    <p className="text-light mt-2">Show files for all maturity settings for this profile.</p>
                                    <button className="btn btn-outline-secondary px-4">EDIT</button>
                                </div>

                                <hr className="my-4" />

                                <div>
                                    <h4 className="profilo">Autoplay Controls:</h4>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                        <Form.Check
                                                type='checkbox'
                                                id={`default`}
                                                label={`Autoplay next episode in a series on all devices`}
                                                readOnly 
                                            />
                                        </div>                                        
                                    </div>
                                    <div className="d-flex align-items-center mt-2">
                                        <div className="me-2">
                                            <Form.Check
                                                type='checkbox'
                                                id={`default1`}
                                                label={`Autoplay next episode in a series on all devices`}
                                                
                                                readOnly 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="action-buttons row pt-2">
                            <div className="col-auto">
                                <button className=" btn btn-outline-secondary mb-2">Service Code</button>
                            </div>
                            <div className="col-auto">
                                <button className=" btn btn-outline-secondary px-5 mb-2">CANCEL</button>
                            </div>
                            <div className="col-auto">
                                <button className=" btn btn-outline-secondary px-5 mb-2">DELETE PROFILE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
