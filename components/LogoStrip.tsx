export default function LogoStrip() {
  return (
    <section id="work">
      <div className="logos">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="logo" aria-label={`Client logo ${i + 1}`}></div>
        ))}
      </div>
      <p className="muted">Trusted across sport, NGOs, tech, and ventures.</p>
    </section>
  );
}
