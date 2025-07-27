import React from "react";

const SkillCard = ({ skill }) => (
    <div className="card shadow-sm bg-light border-0" style={{ width: "18rem" }}>
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="card-title mb-0">{skill.name}</h5>
                <span
                    className={`badge rounded-pill ${skill.online ? "bg-success" : "bg-secondary"
                        }`}
                >
                    {skill.online ? "Online" : "Offline"}
                </span>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{skill.skill}</h6>
            <p className="card-text">
                <strong>Location:</strong> {skill.location} <br />
                <strong>Email:</strong> {skill.email}
            </p>
            <button className="btn btn-sm btn-outline-primary w-100">💬 Chat</button>
        </div>
    </div>
);

export default SkillCard;
