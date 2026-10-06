const CREATIVE = [
  "Social Media Content",
  "Canva Graphic Design",
  "Basic Figma",
  "Instagram Strategy",
  "TikTok Content Ideas",
  "LinkedIn Content",
  "Trend Research",
  "Campaign Ideas",
  "Digital Storytelling",
  "Community Management",
  "Caption Writing",
  "Promo Graphics",
  "Audience Understanding",
];

const TECH = [
  ["HTML & CSS", 85],
  ["JavaScript", 75],
  ["React.js", 70],
  ["Node.js", 65],
  ["Git & GitHub", 75],
  ["Canva / Figma", 80],
];

const STRENGTHS = [
  "Creative",
  "Fast Learner",
  "Good Communicator",
  "Team Player",
  "Responsible",
  "Adaptable",
  "Time Management",
  "Problem-Solving",
  "Attention to Detail",
  "Independent Worker",
  "Positive Attitude",
];

const LANGS = [
  ["Kinyarwanda", "Excellent"],
  ["English", "Advanced"],
  ["French", "Good"],
];

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <p className="section__tag reveal">02 — Skills</p>
        <h2 className="section__title reveal">
          What I bring to the <span className="accent">table</span>.
        </h2>

        <div className="skills">
          <div className="skill-group reveal">
            <div className="skill-group__head">
              <div className="skill-group__icon">🎨</div>
              <h3>Digital Marketing &amp; Creative</h3>
            </div>
            <div className="chips">
              {CREATIVE.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group reveal">
            <div className="skill-group__head">
              <div className="skill-group__icon">💻</div>
              <h3>Computer &amp; Technical</h3>
            </div>
            <div className="bars">
              {TECH.map(([name, level]) => (
                <div className="bar" key={name}>
                  <div className="bar__head">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="bar__track">
                    <i style={{ "--w": `${level}%` }}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-group reveal">
            <div className="skill-group__head">
              <div className="skill-group__icon">🧠</div>
              <h3>Personal Strengths</h3>
            </div>
            <div className="chips chips--alt">
              {STRENGTHS.map((strength) => (
                <span className="chip" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="langs reveal">
          {LANGS.map(([lang, level]) => (
            <div className="lang" key={lang}>
              <h4>{lang}</h4>
              <span>{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
