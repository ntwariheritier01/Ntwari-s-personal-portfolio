const INFO = [
  ["Name", "Ntwari Heritier"],
  ["Location", "Kigali, Rwanda"],
  ["Email", "ntwariheritier@gmail.com"],
  ["Phone", "+250 798 843 030"],
  ["Nationality", "Rwandan"],
  ["Status", "Open to opportunities"],
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section__tag reveal">01 — About Me</p>
        <h2 className="section__title reveal">
          Creative mind with a <span className="accent">developer's</span>{" "}
          logic.
        </h2>

        <div className="about">
          <div className="about__text reveal">
            <p>
              I'm a recent secondary-school graduate with a diploma in{" "}
              <strong>Software Development</strong> and a strong passion for{" "}
              <strong>
                digital marketing, social media, graphic design
              </strong>{" "}
              and content creation.
            </p>
            <p>
              My technical background taught me problem-solving and how to learn
              new platforms fast. My creative side keeps me exploring social
              media trends, designing in Canva &amp; Figma, and inventing fresh
              campaign ideas that connect with online audiences.
            </p>
            <p>
              I'm at the beginning of my professional journey — a fast learner,
              hardworking, and always ready for a new challenge. My goal: help a
              growing team build a <strong>strong online presence</strong>.
            </p>

            <div className="about__info">
              {INFO.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  {value}
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn--primary">
              Let's Work Together
            </a>
          </div>

          <div className="about__card reveal">
            <div className="about__card-head">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>why_me.txt</span>
            </div>
            <pre className="about__code">
              <code>
                <span className="c-key">const</span>{" "}
                <span className="c-var">heritier</span> = {"{"}
                {"\n  "}role: <span className="c-str">"Creative Digital Marketer"</span>,
                {"\n  "}base: <span className="c-str">"Kigali, Rwanda"</span>,
                {"\n  "}education:{" "}
                <span className="c-str">"Software Development"</span>,
                {"\n  "}skills: [
                {"\n    "}
                <span className="c-str">"Content Creation"</span>,
                {"\n    "}
                <span className="c-str">"Canva Design"</span>,
                {"\n    "}
                <span className="c-str">"HTML / CSS / JS"</span>,
                {"\n    "}
                <span className="c-str">"Social Media Trends"</span>,
                {"\n    "}
                <span className="c-str">"Digital Storytelling"</span>
                {"\n  "}],
                {"\n  "}strengths: [
                {"\n    "}
                <span className="c-str">"Fast learner"</span>,
                {"\n    "}
                <span className="c-str">"Creative"</span>,
                {"\n    "}
                <span className="c-str">"Team player"</span>,
                {"\n    "}
                <span className="c-str">"Problem solver"</span>
                {"\n  "}],
                {"\n  "}availability: <span className="c-bool">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
