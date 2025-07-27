import React, { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        skill: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register:", form);
        // Send to backend via Axios (later)
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label>Name:</label>
                    <input name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input name="password" type="password" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Your Skill:</label>
                    <input name="skill" className="form-control" onChange={handleChange} required />
                </div>
                <button className="btn btn-success">Register</button>
            </form>
        </div>
    );
};

export default Register;
