const sectors = [
  {
    title: 'Sport',
    desc: 'Clubs, players, agencies; fan engagement; matchday creative.',
  },
  {
    title: 'NGOs',
    desc: 'Clear messaging, donor journeys, campaigns.',
  },
  {
    title: 'Technology',
    desc: 'Product branding, GTM, landing pages.',
  },
  {
    title: 'Ventures & Corporate',
    desc: 'Finance, lifestyle, entrepreneurial brands.',
  },
];

export default function Sectors() {
  return (
    <section id="sectors" aria-labelledby="sectors-title">
      <h2 id="sectors-title">Focused expertise.</h2>
      <div className="sectors-grid">
        {sectors.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
