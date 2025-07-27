import React from "react";
import SkillCard from "../components/SkillCard";

const Dashboard = () => {
    const skills = [
        { name: "Rahul", skill: "Node.js", email: "rahul@mail.com" },
        { name: "Aisha", skill: "Graphic Design", email: "aisha@mail.com" },
        { name: "Nikesh", skill: "React.js", email: "nikesh@mail.com" },
    ];

    return (
        <div className="container mt-5">
            <h2>Available Skills</h2>
            <div className="d-flex flex-wrap">
                {skills.map((s, i) => (
                    <SkillCard key={i} skill={s} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
