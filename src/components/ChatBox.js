import React, { useState } from "react";

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { from: "You", text: "Hi, I’m interested in your skill." },
        { from: "User", text: "Sure! Let's connect." }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setMessages([...messages, { from: "You", text: input }]);
        setInput("");
    };

    return (
        <div className="container mt-4">
            <h4>Chat Box</h4>
            <div className="border p-3 mb-3" style={{ height: "300px", overflowY: "auto", backgroundColor: "#f1f1f1" }}>
                {messages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{msg.from}: </strong>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="d-flex">
                <input
                    className="form-control me-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                />
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;
