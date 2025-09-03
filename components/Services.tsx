const services = [
  {
    title: 'Branding & Rebranding',
    desc: 'Identity, guidelines, messaging, positioning.',
  },
  {
    title: 'Websites & UX',
    desc: 'From scratch builds, migrations, speed optimisation, SEO basics.',
  },
  {
    title: 'Content & Social',
    desc: 'Editorial calendars, design, short-form video.',
  },
  {
    title: 'Lead Generation',
    desc: 'ICP, lists, outreach, landing pages, conversion.',
  },
  {
    title: 'Digital Sales Enablement',
    desc: 'Assets, sequences, CRM handoff.',
  },
  {
    title: 'Ongoing Management',
    desc: 'Blogs/news, retained design, reporting.',
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <h2 id="services-title">Core capabilities designed to deliver outcomes.</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
