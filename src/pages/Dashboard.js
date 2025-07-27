import React, { useState } from "react";
import SkillCard from "../components/SkillCard";
import SpaceSceneFull from "../components/SpaceSceneFull";

const Dashboard = () => {
    const allSkills = [
        { name: "Rahul", skill: "Node.js", email: "rahul@mail.com", location: "Ahmedabad", online: true },
        { name: "Aisha", skill: "Graphic Design", email: "aisha@mail.com", location: "Surat", online: false },
        { name: "Nikesh", skill: "React.js", email: "nikesh@mail.com", location: "Ahmedabad", online: true },
        { name: "Meera", skill: "Python", email: "meera@mail.com", location: "Rajkot", online: false },
        { name: "Raj", skill: "UI/UX Design", email: "raj@mail.com", location: "Vadodara", online: true },
        { name: "Sita", skill: "Public Speaking", email: "sita@mail.com", location: "Gandhinagar", online: false },
    ];

    const [search, setSearch] = useState("");
    const [locationFilter, setLocationFilter] = useState("All");

    const locations = ["All", "Ahmedabad", "Surat", "Rajkot", "Vadodara"];

    const filteredSkills = allSkills.filter(user => {
        const matchesSearch =
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.skill.toLowerCase().includes(search.toLowerCase());
        const matchesLocation =
            locationFilter === "All" || user.location === locationFilter;
        return matchesSearch && matchesLocation;
    });

    return (

        <div className="container py-5" style={{ position: "relative", zIndex: 1 }}>
            <div className="text-center mb-4">
                <h2 className="fw-bold text-info">🔍 Explore Available Skills</h2>
                <p className="text-muted">Find learners or mentors by skill or location.</p>
            </div>

            {/* Filters */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-4 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name or skill..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-3 mb-2">
                    <select
                        className="form-select"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >
                        {locations.map((loc, i) => (
                            <option key={i} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Cards */}
            <div className="row justify-content-center">
                {filteredSkills.length > 0 ? (
                    filteredSkills.map((s, i) => (
                        <div key={i} className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
                            <SkillCard skill={s} />
                        </div>
                    ))
                ) : (
                    <p className="text-muted text-center mt-4">No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
