import React from "react";
import ChatBox from "./ChatBox";
import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => (
    <div className="card shadow-sm m-2" style={{ width: "18rem" }}>
        <div className="card-body">
            <h5 className="card-title">{skill.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{skill.skill}</h6>
            <p className="card-text">Email: {skill.email}</p>
            {/* <button to="/chat" className="btn btn-primary btn-sm" >Chat</button> */}
            <Link to="/chat" className="btn btn-primary btn-sm">Chat</Link>
        </div>
    </div>
);

export default SkillCard;
