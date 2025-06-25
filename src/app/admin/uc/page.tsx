"use client";
import { useState } from 'react';
import { addUserID } from '@/lib/database';

export default function UserCreationPage() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      await addUserID(input.trim());
      setMessage('User ID added successfully!');
      setInput('');
    } catch (error: any) {
      if (error.code === '23505') { // Unique constraint violation
        setMessage('User ID already exists.');
      } else {
        setMessage('Error adding user ID. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
        />
        <button 
          type="submit" 
          style={{ 
            background: isLoading ? '#888' : '#000', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            padding: '12px 32px', 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            cursor: isLoading ? 'not-allowed' : 'pointer' 
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add User ID'}
        </button>
        {message && <div style={{ color: message.includes('successfully') ? 'green' : 'red', fontWeight: 500 }}>{message}</div>}
      </form>
    </div>
  );
} 