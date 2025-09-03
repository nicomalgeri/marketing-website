'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#results', label: 'Results' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={solid ? 'solid' : ''}>
      <nav aria-label="Primary">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a className="btn" href="mailto:info@nicketing.com">
              Book a consultation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
