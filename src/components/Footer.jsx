export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="nav__logo">
          NH<span>.</span>
        </a>
        <p>
          Designed &amp; built by <strong>Ntwari Heritier</strong> — combining
          code with creativity.
        </p>
        <div className="footer__socials">
          <a href="mailto:ntwariheritier@gmail.com" aria-label="Email">
            ✉️
          </a>
          <a
            href="https://github.com/ntwariheritier01"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            🐙
          </a>
          <a href="tel:+250798843030" aria-label="Phone">
            📞
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Ntwari Heritier. All rights reserved.
      </p>
    </footer>
  );
}
