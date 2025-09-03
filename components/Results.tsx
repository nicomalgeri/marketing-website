const cases = [
  {
    title: 'Football Is More',
    solution: 'Website redesign + ongoing content.',
    outcomes: ['+48% page speed', '+35% time on page'],
  },
  {
    title: 'ASC – After Sports Consultancy',
    solution: 'Social + design system.',
    outcomes: ['+27% follower growth in 90 days'],
  },
  {
    title: 'SKOUTEX',
    solution: 'Strategy, product site, GTM assets.',
    outcomes: ['investor-ready narrative', 'launch assets'],
  },
];

export default function Results() {
  return (
    <section id="results" aria-labelledby="results-title">
      <h2 id="results-title">Selected outcomes.</h2>
      <div className="results-grid">
        {cases.map((c) => (
          <div key={c.title} className="card">
            <h3>{c.title}</h3>
            <p>{c.solution}</p>
            <div className="kpis">
              {c.outcomes.map((o) => (
                <span key={o} className="kpi">
                  {o}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
