import { useEffect, useState } from "react";

const ROLES = [
  "Creative Digital Marketer",
  "Social Media Content Creator",
  "Graphic Designer",
  "Front-End Developer",
  "Trend Researcher",
];

const STATS = [
  { count: 20, label: "+ Creative Projects" },
  { count: 5, label: "+ Tech Tools" },
  { count: 3, label: "Languages" },
];

export default function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = ROLES[roleIndex];
      charIndex = deleting ? charIndex - 1 : charIndex + 1;
      setText(current.slice(0, charIndex));

      let delay = deleting ? 45 : 95;

      if (!deleting && charIndex === current.length) {
        delay = 1900;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="blob blob--1"></div>
        <div className="blob blob--2"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="hero__content">
        <p className="hero__hello reveal">Hello, I'm</p>
        <h1 className="hero__name reveal">
          Ntwari <span className="accent">Heritier</span>
        </h1>
        <div className="hero__role reveal">
          <span>{text}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero__intro reveal">
          Creative digital marketer &amp; software development student from
          Kigali. I blend <strong>code</strong> with <strong>creativity</strong>{" "}
          to build engaging content, campaigns and digital experiences.
        </p>
        <div className="hero__actions reveal">
          <a href="#experience" className="btn btn--primary">
            View My Journey
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get In Touch
          </a>
        </div>

        <div className="hero__stats reveal">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__num" data-count={stat.count}>
                0
              </span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__avatar reveal">
        <div className="hero__avatar-ring"></div>
        <div className="hero__avatar-inner">NH</div>
        <div className="floating-badge floating-badge--1">Canva</div>
        <div className="floating-badge floating-badge--2">React</div>
        <div className="floating-badge floating-badge--3">Figma</div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span></span>
      </a>
    </section>
  );
}
