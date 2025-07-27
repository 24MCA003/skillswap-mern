import React from "react";
import SpaceSceneFull from "../components/SpaceSceneFull";

const About = () => {
    return (
        <>
            <SpaceSceneFull />

            <div
                className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
                style={{ zIndex: 1, width: "100%", maxWidth: "960px" }}
            >
                <h1 className="display-4 fw-bold mb-3">About SkillSwap</h1>
                <p className="lead mb-4">
                    Empowering people to learn and grow together — by <br />
                    <strong>sharing skills</strong>, not just consuming them.
                </p>

                <div className="row g-4 text-start text-white">
                    <div className="col-md-4">
                        <h5 className="text-info">📌 What is it?</h5>
                        <p className="small mb-0">
                            A peer-to-peer platform to teach, learn, and exchange skills for free.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-info">🎯 Mission</h5>
                        <p className="small mb-0">
                            Make knowledge practical, personal, and accessible to all.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-info">👥 Who it's for?</h5>
                        <p className="small mb-0">
                            Students, creators, professionals — anyone eager to grow.
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <a href="/login" className="btn btn-outline-light btn-lg px-4">
                        Join Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default About;
