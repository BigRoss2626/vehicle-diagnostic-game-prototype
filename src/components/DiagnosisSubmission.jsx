import React, { useState } from 'react';

const DiagnosisSubmission = ({ onSubmit }) => {
  const [diagnosis, setDiagnosis] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (diagnosis.trim().length > 0) {
      onSubmit(diagnosis);
      setSubmitted(true);
    }
  };

  return (
    <div className="diagnosis-input-section card">
      <h3>Make Your Diagnosis</h3>
      <input
        type="text"
        placeholder="E.g., Faulty battery terminal connection"
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        disabled={submitted}
      />
      <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem' }}>
        Based on the test results above, identify the fault in the vehicle.
      </p>
      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={diagnosis.trim().length === 0 || submitted}
      >
        Submit Diagnosis
      </button>
    </div>
  );
};

export default DiagnosisSubmission;
