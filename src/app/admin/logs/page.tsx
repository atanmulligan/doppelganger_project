"use client";
import { useEffect, useState } from 'react';

export default function AdminLogsPage() {
  const [logs, setLogs] = useState<{ time: string; consent: string }[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cf_logs');
      if (stored) setLogs(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: '48px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Consent Logs</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 700 }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px', background: '#eee' }}>Time</th>
            <th style={{ border: '1px solid #ccc', padding: '8px', background: '#eee' }}>Consent</th>
          </tr>
        </thead>
        <tbody>
          {logs.length === 0 ? (
            <tr><td colSpan={2} style={{ textAlign: 'center', padding: '16px' }}>No logs found.</td></tr>
          ) : (
            logs.map((log, idx) => (
              <tr key={idx}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{log.time}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{log.consent}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
} 