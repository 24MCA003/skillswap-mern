import React from "react";
import SpaceSceneFull from "../components/SpaceSceneFull";

const Login = () => {
    return (
        <>
            <SpaceSceneFull />

            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: "100vh",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <div
                    className="card bg-dark bg-opacity-75 text-white border-light shadow-lg rounded-4 p-4"
                    style={{ width: "100%", maxWidth: "450px" }}
                >
                    <h2 className="text-center mb-3 fw-bold text-info">🔐 Welcome Back</h2>
                    <p className="text-center text-muted small mb-4">
                        Log in to swap skills and grow together.
                    </p>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-info w-100 fw-semibold">
                            Login
                        </button>
                    </form>

                    <p className="text-center mt-4 small text-secondary mb-0">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-info text-decoration-none">Register</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
