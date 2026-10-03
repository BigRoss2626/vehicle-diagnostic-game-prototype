import React from 'react';
import { getScoreFeedback } from '../game/diagnosticEngine';

const CaseResult = ({ result, onNewCase }) => {
  if (!result) return null;

  const isCorrect = result.isCorrect;

  return (
    <div className="case-result">
      <div className="result-header">
        <div className={isCorrect ? 'result-correct' : 'result-incorrect'}>
          {isCorrect ? '✓' : '✗'}
        </div>
        <h2 className="result-title">
          {isCorrect ? 'Diagnosis Correct!' : 'Incorrect Diagnosis'}
        </h2>
      </div>

      <div className="result-details">
        <div className="result-detail-row">
          <span className="result-label">Expected:</span>
          <span className="result-value">{result.expectedDiagnosis}</span>
        </div>
        <div className="result-detail-row">
          <span className="result-label">Your Answer:</span>
          <span className="result-value">{result.playerDiagnosis}</span>
        </div>
        <div className="result-detail-row">
          <span className="result-label">Tests Performed:</span>
          <span className="result-value">{result.details.testCount}</span>
        </div>
        <div className="result-detail-row">
          <span className="result-label">Time Spent:</span>
          <span className="result-value">{result.details.totalTime} minutes</span>
        </div>
        <div className="result-detail-row">
          <span className="result-label">Total Cost:</span>
          <span className="result-value">${result.details.totalCost}</span>
        </div>
      </div>

      {isCorrect && (
        <div className="result-score">{Math.round(result.score)} / 100</div>
      )}

      <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#666' }}>
        {getScoreFeedback(result.score)}
      </p>

      <button className="btn-primary" onClick={onNewCase}>
        Start New Case
      </button>
    </div>
  );
};

export default CaseResult;
