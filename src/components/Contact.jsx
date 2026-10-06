import { useState } from "react";

const CHANNELS = [
  { icon: "📧", label: "Email", value: "ntwariheritier@gmail.com", href: "mailto:ntwariheritier@gmail.com" },
  { icon: "📞", label: "Phone", value: "+250 798 843 030", href: "tel:+250798843030" },
  { icon: "📍", label: "Location", value: "Kigali, Rwanda" },
  { icon: "🐙", label: "GitHub", value: "@ntwariheritier01", href: "https://github.com/ntwariheritier01" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState("");

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNote("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:ntwariheritier@gmail.com?subject=${subject}&body=${body}`;
    setNote("Opening your email app — thank you!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <p className="section__tag reveal">04 — Contact</p>
        <h2 className="section__title reveal">
          Let's create something <span className="accent">together</span>.
        </h2>
        <p className="contact__lead reveal">
          Open to internships, entry-level roles and freelance projects in
          digital marketing, content creation or front-end development. I'd love
          to hear from you.
        </p>

        <div className="contact">
          <form className="contact__form reveal" onSubmit={submit}>
            <div className="field">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={form.name}
                onChange={update("name")}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="field">
              <input
                type="email"
                id="email"
                placeholder=" "
                value={form.email}
                onChange={update("email")}
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="field">
              <textarea
                id="message"
                rows="5"
                placeholder=" "
                value={form.message}
                onChange={update("message")}
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send Message ✉️
            </button>
            <p className="form-note">{note}</p>
          </form>

          <div className="contact__info reveal">
            {CHANNELS.map((channel) => {
              const inner = (
                <>
                  <div className="info-card__icon">{channel.icon}</div>
                  <div>
                    <span>{channel.label}</span>
                    <strong>{channel.value}</strong>
                  </div>
                </>
              );
              return channel.href ? (
                <a
                  className="info-card"
                  href={channel.href}
                  key={channel.label}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                >
                  {inner}
                </a>
              ) : (
                <div className="info-card" key={channel.label}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
