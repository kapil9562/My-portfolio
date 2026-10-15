
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

export const ContactModal = ({ isOpen, onClose }) => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape" && !loading) onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, loading, onClose]);

    if (!isOpen) return null;

    const sendEmail = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setStatus("");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setSuccess(true);
            setStatus("Your message has been sent successfully!");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setSuccess(false);
            setStatus("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-800 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-[2px]" onMouseDown={(e) => { if (e.target === e.currentTarget && !loading) onClose(); }}>
            <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] shadow-[0_0_70px_rgba(255,45,120,0.14)]">
                {/* Gradient top border */}
                <div className="h-1 w-full bg-linear-to-r from-pink-500 via-rose-500 to-orange-500" />

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-600/10 blur-3xl" />

                <div className="relative p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-7 flex items-start justify-between gap-4">
                        <div>
                            <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-white font-bricolage">
                                Let's <span className="bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Talk.</span>
                            </h2>
                            <p className="text-sm leading-6 text-gray-400 font-instrumentSans">
                                Have an idea or opportunity? I'd love to hear from you.
                            </p>
                        </div>

                        <button type="button" onClick={onClose} disabled={loading} aria-label="Close contact form" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-gray-400 transition hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 disabled:opacity-50">
                            <IoClose />
                        </button>
                    </div>

                    {/* Status message */}
                    {status && (
                        <div role="status" aria-live="polite" className={`mb-5 rounded-xl border p-3 text-sm font-instrumentSans tracking-wider ${success ? "border-green-500/30 bg-green-500/10 text-green-400" : "border-red-500/30 bg-red-500/10 text-red-400"}`}>
                            {status}
                        </div>
                    )}

                    {/* Success screen */}
                    {success ? (
                        <div className="py-8 text-center">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-3xl text-pink-400">
                                <GiCheckMark />
                            </div>

                            <h3 className="text-xl font-semibold text-white font-bricolage tracking-wide">
                                Message Sent!
                            </h3>

                            <p className="mt-2 text-sm text-gray-400 font-instrumentSans">
                                Thanks for reaching out. I'll get back to you soon.
                            </p>

                            <button type="button" onClick={onClose} className="mt-7 transform-gpu px-3 py-1.5 bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-xl cursor-pointer transition-[scale] duration-300 active:scale-95 will-change-transform border-2 border-[#F83C90] shadow-xl shadow-[#6D4300]/50 font-instrumentSans">
                                Done
                            </button>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-gray-300 font-bricolage">
                                    Your Name
                                </label>
                                <input id="user_name" name="user_name" type="text" placeholder="John Doe" autoComplete="name" maxLength={100} required className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 font-instrumentSans" />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-gray-300 font-bricolage">
                                    Email Address
                                </label>
                                <input id="user_email" name="user_email" type="email" placeholder="john@example.com" autoComplete="email" maxLength={254} required className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 font-instrumentSans" />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300 font-bricolage">
                                    Subject
                                </label>
                                <input id="subject" name="subject" type="text" placeholder="Project inquiry / Job opportunity" maxLength={150} required className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 font-instrumentSans" />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300 font-bricolage">
                                    Your Message
                                </label>
                                <textarea id="message" name="message" rows={4} placeholder="Tell me a little about what you have in mind..." maxLength={5000} required className="w-full resize-y rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-gray-600 transition focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 font-instrumentSans" />
                            </div>

                            {/* Submit button */}
                            <button type="submit" disabled={loading} className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 via-rose-500 to-orange-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/30 disabled:cursor-not-allowed disabled:opacity-60">
                                {loading ? (
                                    <>
                                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                        Sending Message...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true">
                                            <path d="M22 2 11 13" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="m22 2-7 20-4-9-9-4Z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-gray-500">
                                Your message goes directly to my inbox.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
