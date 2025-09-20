import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: send to backend or email service
  };

  return (
    <section className="py-20 px-6 custom-color2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center  mb-20">Contact Us</h2>

        {/* Contact Info + Form */}
        <div className="custom-color rounded-2xl shadow-lg p-8 mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-2">📍 Location / nicosia /ssss</p>
          <p className="text-gray-700 mb-2">📞 +357 22 123456</p>
          <p className="text-gray-700 mb-6">✉️ design@move-dp.com</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />{" "}
            <input
              type="phone"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Full Width */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map Nicosia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.3232046354144!2d33.3642!3d35.1856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de179b77a3a6f1%3A0x2a5c2af1c3c671d0!2sNicosia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1693400000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
