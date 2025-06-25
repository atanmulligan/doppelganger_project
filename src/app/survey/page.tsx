"use client";
import { useRouter } from 'next/navigation';

export default function SurveyPage() {
  const router = useRouter();
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '32px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Instruction and Consent Form for Research Participants</h1>
      <div style={{ maxWidth: 800, fontSize: '1.05rem', color: '#222', lineHeight: 1.7, fontWeight: 500 }}>
        <b>Title of the research:</b> Research on the development of generative AI-based digital doppelganger and communication process with doppelganger<br />
        <b>Principal Investigator:</b> Eun-mee Kim (Professor, Department of Communication)<br /><br />
        This research aims to evaluate the perceived similarity between individuals and their digital doppelgängers, referred to as AITwinBots, which are generated through large language models (LLM). Participation is entirely voluntary, and your consent is crucial. Please read the following details carefully to understand the research&rsquo;s purpose and content. Feel free to discuss it with family or friends before deciding. Let us know if you agree to participate. If you have any questions, please contact soeun022@snu.ac.kr. The researcher will offer detailed answers.<br /><br />
        <b>1. Why is this research being conducted?</b><br />
        Using Artificial Intelligence (LLM), this study aims to develop chatbots that mimic the personalities of human beings (doppelgängers). This study aims to test if it is possible to create chatbots (doppelgängers) that exhibit similar personalities to individuals using AI (LLM). Our goal is to see how closely these chatbots can match an individual&apos;s self-knowledge, personal traits, values, and lifestyle.<br /><br />
        <b>2. How many people will participate in the research?</b><br />
        Approximately 1000 adults (18 or older) will participate in the study.<br /><br />
        <b>3. How will the research proceed?</b><br />
        The research process is as follows:<br />
        1) Read the study details and agree to participate online.<br />
        2) Complete an online pre-survey to share your demographics, personal traits, values, and lifestyle, helping us create your doppelgänger chatbot.<br />
        3) After your doppelgänger chatbot is created, it will generate essays from your perspective. You will evaluate these essays by answering survey questions.<br /><br />
        <b>4. What is the duration of participation in the research?</b><br />
        It will take about 30-40 minutes for surveys and essay evaluation.<br /><br />
        <b>5. Once participation in the research has begun, is it possible to stop participating?</b><br />
        Yes. You are free to withdraw from the study at any time without any negative impact. If you decide to stop, simply close the study website window to ensure your responses are not recorded.<br /><br />
        <b>6. Are there any side effects or risks involved in participation in this research?</b><br />
        Since this study is an online survey and conducted anonymously, no direct side effects or risks are associated with it.<br /><br />
        <b>7. Are there any advantages to participating in the research?</b><br />
        Your participation in this research offers an ample opportunity to advance AI technology and understand how it could mirror human personalities. In comparing your AI counterparts&apos; generated responses with your own, you may gain insight into yourself and the latest AI technology.<br /><br />
        <b>8. Are there any disadvantages to participating in the research?</b><br />
        You can choose to participate or not participate in the research without any negative consequences.<br /><br />
        <b>9. Is the information gathered during the participation secure?</b><br />
        The person responsible for managing the personal data collected in this research is Eun-mee Kim (eunmee@snu.ac.kr) at Seoul National University. Eun-mee Kim (Principle investigator) and the research team will only be able to access the data, which will be stored securely on password-protected cloud storage and physically on a computer in her office (Room 408, Building 64) at Seoul National University. The consent forms will be kept for three years as required by law, then safely discarded. Research data will be preserved permanently following Seoul National University Research Ethics Guidelines, with stringent security measures in place to protect your personal information. Any identifiable information will not be disclosed in any form of reports or presentations. However, if required by law, your responses may be provided to the Seoul National University Institutional Review Board, which may review the research results to ensure the protection of your data and the integrity of the research. Signing this consent form confirms your understanding and agreement to these terms.<br /><br />
        <b>10. How much will participants be paid for participation?</b><br />
        You will be paid 5 dollars for the study of 30-40 minutes.<br /><br />
        <b>11. If I have any questions about the research, whom can I contact?</b><br />
        If you have any questions, issues, or concerns about the research, please reach out to the researcher below.<br />
        Name: Soeun Yang<br />
        Contact: soeun022@snu.ac.kr<br />
        If you have any questions related to your rights as a research participant, please contact the Seoul National University Institutional Review Board, as shown below.<br />
        Seoul National University Institutional Review Board (SNUIRB)<br />
        Phone: 02-880-5153<br />
        E-mail: irb@snu.ac.kr
      </div>
      <button
        style={{ background: '#000', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px 40px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '2.5rem' }}
        onClick={() => router.push('/cf')}
      >
        Next
      </button>
    </div>
  );
} 