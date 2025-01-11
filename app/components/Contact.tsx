"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzBEYkokXtpgm7rNT_zeSn4A5iVpnLyl2t6TXzOspnnPSv9pFNl3QFeN2XSbtgsGNjz/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      let jsonResult;

      try {
        jsonResult = JSON.parse(result);
      } catch (parseError) {
        console.error("Error parsing response:", result);
        throw new Error("Invalid response from server");
      }

      if (jsonResult.success) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(jsonResult.message || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="py-20 bg-black/50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-500/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xl font-medium text-purple-400">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400">
            Ready to transform your business with AI? Contact us today for a
            free consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 11-8 0 4 4 0 018 0zm6 8v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-gray-400">vegapro.ai@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21l6-16m5 16l-6-16"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-gray-400">+91 9398635802</p>
                <p className="text-gray-400">+91 7337059915</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
                required
              />
            </div>
            <div>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500/40"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
