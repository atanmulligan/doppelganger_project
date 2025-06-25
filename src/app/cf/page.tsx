"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addConsentLog } from '@/lib/database';

export default function ConsentFormPage() {
  const [consent, setConsent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    if (consent === 'agree') {
      setIsLoading(true);
      setError('');
      
      try {
        // For now, we'll use a placeholder prolific_id since it's not collected yet
        // In a real implementation, you might want to collect this earlier or use a session ID
        await addConsentLog('pending', 'agree');
        router.push('/id');
      } catch (err) {
        setError('Error saving consent. Please try again.');
        console.error('Error saving consent:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '32px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Consent Form</h1>
      
      <div style={{ maxWidth: 800, fontSize: '1.05rem', color: '#222', lineHeight: 1.7, fontWeight: 500 }}>
        <b>Title of the research:</b> Research on development of generative AI-based digital doppelganger and communication process with doppelganger<br />
        <b>Principal Investigator:</b> Eun-mee Kim (Professor, Department of Communication)<br /><br />
        <ul style={{ paddingLeft: 20 }}>
          <li>I have carefully read and discussed the above instructions with the researcher.</li>
          <li>I have been informed about the potential risks and benefits of participating in the research, and I have had all my questions answered satisfactorily.</li>
          <li>I agree to participate in the research voluntarily.</li>
          <li>I agree to the collection and use of my personal data for the research, as per existing laws and the Institutional Review Board&rsquo;s guidelines.</li>
          <li>I allow my personal information, securely held by the researchers, to be accessed by legal and regulatory bodies, including the SNU Institutional Review Board, for oversight purposes.</li>
          <li>I understand that I can withdraw from the research at any time without any detriment to myself.</li>
        </ul>
        <div style={{ marginTop: '2rem', fontWeight: 600 }}>Do you agree to participate in this study?</div>
        
        <div style={{ marginTop: '1rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <input 
              type="radio" 
              name="consent" 
              value="agree" 
              checked={consent === 'agree'} 
              onChange={() => setConsent('agree')}
              disabled={isLoading}
            /> Agree
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
            <input 
              type="radio" 
              name="consent" 
              value="disagree" 
              checked={consent === 'disagree'} 
              onChange={() => setConsent('disagree')}
              disabled={isLoading}
            /> Disagree
          </label>
        </div>
        
        {error && <div style={{ color: 'red', fontWeight: 500, marginTop: '1rem' }}>{error}</div>}
        
        <button
          style={{ 
            background: consent === 'agree' && !isLoading ? '#000' : '#888', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '12px', 
            padding: '16px 40px', 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            cursor: consent === 'agree' && !isLoading ? 'pointer' : 'not-allowed', 
            marginTop: '1.5rem' 
          }}
          disabled={consent !== 'agree' || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Saving...' : 'Submit'}
        </button>
      </div>
    </div>
  );
} 