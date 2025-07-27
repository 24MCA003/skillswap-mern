import React from 'react';

const Profile = () => {
    // Temporary dummy data
    const user = {
        name: "Nikesh",
        email: "nikesh@email.com",
        skill: "React.js"
    };

    return (
        <div className="container mt-5">
            <h2>My Profile</h2>
            <ul className="list-group">
                <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                <li className="list-group-item"><strong>Skill:</strong> {user.skill}</li>
            </ul>
        </div>
    );
};

export default Profile;
