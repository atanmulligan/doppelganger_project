"use client";
import { useEffect, useState } from 'react';
import { getConsentLogs } from '@/lib/database';

interface ConsentLog {
  id: number;
  prolific_id: string;
  consent_status: string;
  created_at: string;
}

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<ConsentLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const consentLogs = await getConsentLogs();
        setLogs(consentLogs);
      } catch (err) {
        setError('Failed to load consent logs');
        console.error('Error fetching consent logs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '48px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Consent Logs</h1>
      
      {isLoading && (
        <div style={{ fontSize: '1.1rem', color: '#666' }}>Loading...</div>
      )}
      
      {error && (
        <div style={{ fontSize: '1.1rem', color: 'red', marginBottom: '1rem' }}>{error}</div>
      )}
      
      {!isLoading && !error && (
        <div>
          <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            Total Logs: {logs.length}
          </div>
          <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 800 }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ccc', padding: '8px', background: '#eee' }}>Time</th>
                <th style={{ border: '1px solid #ccc', padding: '8px', background: '#eee' }}>Prolific ID</th>
                <th style={{ border: '1px solid #ccc', padding: '8px', background: '#eee' }}>Consent</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '16px' }}>No logs found.</td></tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id}>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{formatDate(log.created_at)}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{log.prolific_id}</td>
                    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{log.consent_status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 