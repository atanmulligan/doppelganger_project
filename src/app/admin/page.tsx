import React from 'react';
import Link from 'next/link';

const pages = [
  { href: '/', label: 'Front Page' },
  { href: '/survey', label: 'Survey Page' },
  { href: '/results', label: 'Results Page' },
  { href: '/settings', label: 'Settings Page' },
];

export default function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '48px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Admin Navigation</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: 400 }}>
        {pages.map((page) => (
          <Link key={page.href} href={page.href} style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', background: '#000', color: '#fff', border: 'none', borderRadius: '12px', padding: '20px', fontSize: '1.25rem', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left' }}>
              {page.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
} 