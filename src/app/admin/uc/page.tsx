"use client";
import { useState } from 'react';

export default function UserCreationPage() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    let ids = JSON.parse(localStorage.getItem('user_ids') || '[]');
    if (!ids.includes(input.trim())) {
      ids.push(input.trim());
      localStorage.setItem('user_ids', JSON.stringify(ids));
      setMessage('User ID added!');
    } else {
      setMessage('User ID already exists.');
    }
    setInput('');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>User Creation (Add Prolific ID)</h1>
      <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: 320 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter new Prolific ID"
          style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}
          autoComplete="off"
        />
        <button type="submit" style={{ background: '#000', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px 32px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Add User ID
        </button>
        {message && <div style={{ color: message.includes('added') ? 'green' : 'red', fontWeight: 500 }}>{message}</div>}
      </form>
    </div>
  );
} 