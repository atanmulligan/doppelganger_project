"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUserID } from '@/lib/database';

export default function IDPage() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const isValid = await checkUserID(input.trim());
      if (isValid) {
        router.push('/instructions');
      } else {
        setError('ID not found. Please check your Prolific ID or contact the researcher.');
      }
    } catch (err) {
      setError('Error checking ID. Please try again.');
      console.error('Error checking user ID:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Please put your Prolific ID here</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: 320 }}>
        <label htmlFor="prolific-id" style={{ fontWeight: 500 }}>Prolific ID</label>
        <input
          id="prolific-id"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}
          autoComplete="off"
          disabled={isLoading}
        />
        <div style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem' }}>Make sure you&rsquo;ve entered the correct Prolific ID without typos.</div>
        {error && <div style={{ color: 'red', fontWeight: 500 }}>{error}</div>}
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
            cursor: isLoading ? 'not-allowed' : 'pointer', 
            marginTop: '0.5rem' 
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Checking...' : 'Submit'}
        </button>
      </form>
    </div>
  );
} 