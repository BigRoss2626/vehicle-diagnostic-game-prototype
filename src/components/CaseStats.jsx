import React from 'react';

const CaseStats = ({ time, cost }) => {
  return (
    <div className="case-stats">
      <h3>Case Progress</h3>
      <div className="stat-row">
        <span className="stat-label">Diagnostic Time:</span>
        <span className="stat-value">{time} minutes</span>
      </div>
      <div className="stat-row">
        <span className="stat-label">Total Cost:</span>
        <span className="stat-value stat-cost">${cost}</span>
      </div>
    </div>
  );
};

export default CaseStats;
