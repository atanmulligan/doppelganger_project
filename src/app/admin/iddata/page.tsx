"use client";
import { useEffect, useState } from 'react';
import { getUserIDs } from '@/lib/database';

export default function IDDataPage() {
  const [ids, setIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIDs = async () => {
      try {
        const userIDs = await getUserIDs();
        setIds(userIDs);
      } catch (err) {
        setError('Failed to load user IDs');
        console.error('Error fetching user IDs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIDs();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '48px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>All Prolific IDs</h1>
      
      {isLoading && (
        <div style={{ fontSize: '1.1rem', color: '#666' }}>Loading...</div>
      )}
      
      {error && (
        <div style={{ fontSize: '1.1rem', color: 'red', marginBottom: '1rem' }}>{error}</div>
      )}
      
      {!isLoading && !error && (
        <div>
          <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            Total IDs: {ids.length}
          </div>
          <ul style={{ fontSize: '1.1rem', color: '#222', fontWeight: 500 }}>
            {ids.length === 0 ? (
              <li>No IDs found.</li>
            ) : (
              ids.map((id, idx) => <li key={idx}>{id}</li>)
            )}
          </ul>
        </div>
      )}
    </div>
  );
} 