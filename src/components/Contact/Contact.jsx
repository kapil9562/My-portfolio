import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: "#EBCB90" }}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-[#6D4300]">
                    Contact Me
                </h2>

                <label className="block mb-4">
                    <span className="text-sm font-semibold text-[#6D4300]">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-3 py-2 rounded-lg focus:outline-none inset-shadow-sm bg-transparent "
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-sm font-semibold text-[#6D4300]">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 px-3 py-2 rounded-lg focus:outline-none inset-shadow-sm bg-transparent"
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-sm font-semibold" style={{ color: "#6D4300" }}>Message</span>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full mt-1 px-3 py-2 rounded-lg focus:outline-none resize-none inset-shadow-sm bg-transparent"
                    ></textarea>
                </label>

                <button
                    type="submit"
                    className="w-full py-2 rounded-lg font-bold hover:opacity-90 transition"
                    style={{ backgroundColor: "#6D4300", color: "#F7F4EA" }}
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact