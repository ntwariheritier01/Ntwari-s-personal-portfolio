const DUTIES = [
  "Create and experiment with digital content and visual designs for online platforms.",
  "Design posters, social media graphics and promotional content with Canva.",
  "Follow Instagram & TikTok trends to understand what makes content perform.",
  "Develop creative ideas for posts, campaigns and promotional content.",
  "Build personal web development projects and digital interfaces.",
  "Combine technology and creativity in every project I take on.",
];

const CARDS = [
  {
    icon: "🎯",
    title: "Career Objective",
    text: "To use my creativity and digital skills to create engaging social media content, support online campaigns and interact with audiences — while combining my technical background to help a growing company build a strong online presence.",
  },
  {
    icon: "📈",
    title: "Professional Development",
    text: "I'm eager to gain practical experience and learn how companies use social media to connect with customers, promote products and build communities — open to feedback and ready to contribute ideas.",
  },
  {
    icon: "❤️",
    title: "Interests",
    text: "Graphic design · social media trends · technology · photography · learning new digital skills · music & entertainment · building personal tech projects.",
  },
];

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <p className="section__tag reveal">03 — Experience</p>
        <h2 className="section__title reveal">
          My creative <span className="accent">journey</span>.
        </h2>

        <div className="timeline">
          <div className="timeline__item reveal">
            <div className="timeline__dot"></div>
            <div className="timeline__card">
              <span className="timeline__date">2024 — Present</span>
              <h3>Content Creator / Designer / Developer</h3>
              <h4>Personal Digital &amp; Creative Projects</h4>
              <ul>
                {DUTIES.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="dev-cards">
          {CARDS.map((card) => (
            <div className="dev-card reveal" key={card.title}>
              <div className="dev-card__icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
