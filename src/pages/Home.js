import { useNavigate } from "react-router-dom";
import SpaceSceneFull from "../components/SpaceSceneFull";

const Home = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <SpaceSceneFull />

            <div
                className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
                style={{ zIndex: 1, width: "100%", maxWidth: "960px" }}
            >
                <h1 className="display-2 fw-bold mb-3">SkillSwap</h1>
                <p className="lead fs-4 mb-4">Exchange skills. Elevate learning. Empower others.</p>
                <button className="btn btn-info btn-lg px-5 mb-5" onClick={handleLogin}>
                    Get Started
                </button>

                <div className="d-flex justify-content-center flex-wrap gap-4">
                    <div>
                        <h5 className="text-info mb-1">🔗 Connect</h5>
                        <p className="small mb-0">Meet learners and mentors across domains.</p>
                    </div>
                    <div>
                        <h5 className="text-info mb-1">📚 Learn & Teach</h5>
                        <p className="small mb-0">Share what you know. Learn what you don’t.</p>
                    </div>
                    <div>
                        <h5 className="text-info mb-1">🚀 Grow</h5>
                        <p className="small mb-0">Upskill and unlock opportunities together.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
