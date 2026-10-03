import React from 'react';

const TestSelector = ({ tests, onRunTest }) => {
  return (
    <div className="test-selector card">
      <h3>Available Tests</h3>
      <div className="test-list">
        {tests.map((test) => (
          <button
            key={test.id}
            className="test-button"
            onClick={() => onRunTest(test.id)}
          >
            <span className="test-button-label">{test.label}</span>
            <span className="test-button-cost">{test.timeMinutes}m | ${test.cost}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestSelector;
