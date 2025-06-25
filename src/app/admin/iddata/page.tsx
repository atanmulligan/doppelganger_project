"use client";
import { useEffect, useState } from 'react';

export default function IDDataPage() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user_ids');
      if (stored) setIds(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '48px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>All Prolific IDs</h1>
      <ul style={{ fontSize: '1.1rem', color: '#222', fontWeight: 500 }}>
        {ids.length === 0 ? (
          <li>No IDs found.</li>
        ) : (
          ids.map((id, idx) => <li key={idx}>{id}</li>)
        )}
      </ul>
    </div>
  );
} 