import React, { useState } from "react";
import SpaceSceneFull from "../components/SpaceSceneFull";

const Register = () => {
    const [selectedState, setSelectedState] = useState("Gujarat");

    const stateCityMap = {
        Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
        Karnataka: ["Bangalore", "Mysore"],
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    return (
        <>
            <SpaceSceneFull />

            <div
                className="container py-5"
                style={{ position: "relative", zIndex: 1 }}
            >
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card bg-dark bg-opacity-75 text-white shadow-lg border-light rounded-4 p-4">
                            <h2 className="text-center mb-4 fw-bold text-info">📝 Join SkillSwap</h2>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder="John Doe" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" placeholder="you@example.com" required />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Create password" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" placeholder="Re-enter password" required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Your Skills</label>
                                    <input type="text" className="form-control" placeholder="e.g., Python, Design, Public Speaking" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Want to Learn</label>
                                    <input type="text" className="form-control" placeholder="e.g., Web Dev, Marketing" />
                                </div>

                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">Country</label>
                                        <select className="form-select" disabled>
                                            <option value="India" selected>India</option>
                                        </select>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">State</label>
                                        <select className="form-select" value={selectedState} onChange={handleStateChange}>
                                            {Object.keys(stateCityMap).map((state) => (
                                                <option key={state} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">City</label>
                                        <select className="form-select">
                                            {stateCityMap[selectedState].map((city) => (
                                                <option key={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">About You</label>
                                    <textarea className="form-control" rows="3" placeholder="Tell others about yourself..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-info w-100 fw-semibold">Register</button>
                            </form>

                            <p className="text-center mt-3 small text-secondary">
                                Already have an account?{" "}
                                <a href="/login" className="text-info text-decoration-none">Login here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
