'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Toast from './Toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [show, setShow] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (
      !name ||
      !email ||
      !message ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      alert('Please fill out all fields with a valid email.');
      return;
    }
    console.log({ name, email, message });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setShow(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Request failed');
      }
    } catch {
      window.location.href = `mailto:info@nicketing.com?subject=Contact&body=Name:%20${encodeURIComponent(
        name
      )}%0AEmail:%20${encodeURIComponent(email)}%0A${encodeURIComponent(message)}`;
    }
  };

  return (
    <footer id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Send
        </button>
      </form>
      {show && (
        <Toast
          message="Thanks — we’ll be in touch."
          onDone={() => setShow(false)}
        />
      )}
    </footer>
  );
}
