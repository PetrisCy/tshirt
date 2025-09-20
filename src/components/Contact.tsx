import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  botcheck: string;
};

export default function ContactUs() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState<null | {
    type: "ok" | "err";
    msg: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: "ok", msg: "Please wait..." });

    // Build payload by Web3Forms
    const payload = {
      access_key: "da87665e-1c3d-4ae7-8c34-d7a2554c8dff",
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      botcheck: form.botcheck,
      // Optional extras:
      from_name: "Website Contact Form",
      subject: "New contact form submission",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus({ type: "ok", msg: "Form submitted successfully ✅" });
        setForm({ name: "", email: "", phone: "", message: "", botcheck: "" });
      } else {
        setStatus({ type: "err", msg: data?.message || "Submission failed." });
      }
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Something went wrong! Please try again.",
      });
    } finally {
      setLoading(false);
      // Auto-hide the status message after a few seconds
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="py-20 px-6 custom-color2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center mb-20">Contact Us</h2>

        {/* Contact Info + Form */}
        <div className="custom-color rounded-2xl shadow-lg p-8 mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-2">📍 Location / Nicosia</p>
          <p className="text-gray-700 mb-2">📞 +357 22 123456</p>
          <p className="text-gray-700 mb-6">✉️ design@move-dp.com</p>

          <form onSubmit={handleSubmit} className="space-y-4" id="form">
            {/* name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />

            {/* email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />

            {/* phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
            />

            {/* message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 custom-color shadow-sm"
              required
            />

            {/* honeypot (should remain empty) */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              value={form.botcheck}
              onChange={handleChange}
              className="hidden"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold shadow-md disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* result message */}
            {status && (
              <div
                id="result"
                className={`text-sm mt-2 ${
                  status.type === "ok" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>

        {/* Google Map Full Width */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.41884161344444!2d33.38173533633473!3d35.107774589493786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de19527aa2366b%3A0xc47a510b9c9eaa1d!2sMOVE%20DIGITAL%20PRINTING%20LTD!5e1!3m2!1sen!2s!4v1758369933830!5m2!1sen!2s"
            width="100%"
            height="600"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
