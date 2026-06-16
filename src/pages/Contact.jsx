import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank You ${name}

Your inquiry has been submitted successfully.`);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="max-w-7xl mx-auto">
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-12">

        <h1 className="text-5xl font-bold text-center text-[#6A1B4D] mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#6A1B4D] mb-6">
              Academy Information
            </h2>

            <div className="space-y-4 text-lg">
              <p>📍 Hyderabad, Telangana</p>
              <p>📞 +91 9876543210</p>
              <p>📧 info@kuchipudiacademy.com</p>
              <p>🕒 Mon - Sat : 9 AM - 7 PM</p>
            </div>
          </div>

          {/* Form */}

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#6A1B4D] mb-6">
              Send an Inquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border p-4 rounded-lg"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border p-4 rounded-lg"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                className="w-full border p-4 rounded-lg"
                required
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className="w-full border p-4 rounded-lg"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#6A1B4D] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#4a1034] transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;