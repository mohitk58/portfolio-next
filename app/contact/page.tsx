"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PacmanLoader } from "react-spinners";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setSending(true);

      await emailjs.sendForm(
        "service_90674qt",
        "template_wfc6fhd",
        formRef.current,
        "VPBwW_dwnhH7M6Gi4",
      );

      setSuccess("Message sent successfully 🚀");
      formRef.current.reset();
    } catch (err) {
      setSuccess("Something went wrong ❌");
    } finally {
      setSending(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#ad46ff" size={25} />
      </div>
    );
  }

  return (
    <div className="px-6 py-10 min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h1>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            I’m interested in React / Next.js projects and building scalable UI.
            If you have any questions or opportunities, feel free to reach out.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="input"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="input resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 rounded-full font-medium bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "🚀 Send Message"}
            </button>

            {success && (
              <p className="text-sm text-green-400 mt-2">{success}</p>
            )}
          </form>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg text-zinc-300">
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h2>

            <p className="mb-2">
              <span className="text-indigo-400">Name:</span> Mohit Kumar
            </p>
            <p className="mb-2">
              <span className="text-indigo-400">Location:</span> Uttar Pradesh,
              India
            </p>
            <p className="mb-2">
              <span className="text-indigo-400">Area:</span> Muzaffarnagar
            </p>
            <p>
              <span className="text-indigo-400">Email:</span>{" "}
              <a href="mailto:mk581991@gmail.com" className="hover:underline">
                mk581991@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
