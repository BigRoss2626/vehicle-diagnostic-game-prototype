import React from 'react';

const DiagnosticLog = ({ log }) => {
  if (!log || log.length === 0) {
    return (
      <div className="card diagnostic-log">
        <h3>Diagnostic Log</h3>
        <div className="log-empty">Run tests to populate the diagnostic log</div>
      </div>
    );
  }

  return (
    <div className="card diagnostic-log">
      <h3>Diagnostic Log</h3>
      {log.map((entry, index) => (
        <div key={index} className="log-entry">
          <div className="log-entry-header">Test {entry.timestamp}: {entry.testLabel}</div>
          <div className="log-entry-result">{entry.result}</div>
          {entry.clue && <div className="log-entry-clue">💡 {entry.clue}</div>}
          <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.5rem' }}>
            Time: {entry.time}m | Cost: ${entry.cost}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiagnosticLog;
