import React, { useState } from "react";

// You can use your own logo URL or a placeholder
const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Default avatar icon

const Profile = () => {
    const [user, setUser] = useState({
        name: "Nikesh",
        email: "nikesh@email.com",
        skill: "React.js",
        location: "Ahmedabad",
        bio: "Full-stack developer passionate about sharing and learning.",
        online: true,
    });

    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="card shadow-lg rounded-4 p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-info">👤 My Profile</h2>

                    {/* Profile Image Preview */}
                    <div className="mb-3">
                        <img
                            src={profileImage || defaultImage}
                            alt="Profile"
                            className="rounded-circle border"
                            style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                    </div>

                    {/* Upload Button */}
                    <div className="mb-3">
                        <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
                    </div>
                </div>

                {/* Profile Info */}
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item"><strong>Name:</strong> {user.name}</li>
                    <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                    <li className="list-group-item"><strong>Skill:</strong> {user.skill}</li>
                    <li className="list-group-item"><strong>Location:</strong> {user.location}</li>
                    <li className="list-group-item">
                        <strong>Status:</strong>{" "}
                        <span className={`badge ${user.online ? "bg-success" : "bg-secondary"}`}>
                            {user.online ? "Online" : "Offline"}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <strong>Bio:</strong>
                        <div className="text-muted mt-1">{user.bio}</div>
                    </li>
                </ul>

                <div className="text-center">
                    <button className="btn btn-outline-info px-4">Edit Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
