import React, { useState, useEffect } from 'react';
import { vehicles } from './data/vehicles';
import { faults } from './data/faults';
import { testCatalog, getAvailableTestIdsForVehicle } from './data/testCatalog';
import { getDiagnosticResult, calculateScore } from './game/diagnosticEngine';
import VehicleInfo from './components/VehicleInfo';
import CustomerComplaint from './components/CustomerComplaint';
import DiagnosticLog from './components/DiagnosticLog';
import TestSelector from './components/TestSelector';
import CaseStats from './components/CaseStats';
import DiagnosisSubmission from './components/DiagnosisSubmission';
import CaseResult from './components/CaseResult';

const App = () => {
  const [currentVehicle, setCurrentVehicle] = useState(null);
  const [currentFault, setCurrentFault] = useState(null);
  const [diagnosticLog, setDiagnosticLog] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [gameState, setGameState] = useState('caseSelection'); // caseSelection, investigating, diagnosing, caseComplete
  const [playerDiagnosis, setPlayerDiagnosis] = useState(null);
  const [caseResult, setCaseResult] = useState(null);
  const [availableTests, setAvailableTests] = useState([]);

  // Initialize a new case
  const startNewCase = () => {
    const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
    const randomFault = faults[Math.floor(Math.random() * faults.length)];

    setCurrentVehicle(randomVehicle);
    setCurrentFault(randomFault);
    setDiagnosticLog([]);
    setTotalTime(0);
    setTotalCost(0);
    setPlayerDiagnosis(null);
    setCaseResult(null);
    setGameState('investigating');

    // Set available tests based on vehicle type
    const testIds = getAvailableTestIdsForVehicle(randomVehicle.type);
    const tests = testIds.map(id => testCatalog.find(t => t.id === id)).filter(Boolean);
    setAvailableTests(tests);
  };

  // Run a diagnostic test
  const runTest = (testId) => {
    const test = testCatalog.find(t => t.id === testId);
    if (!test) return;

    // Get realistic test result based on the fault
    const result = getDiagnosticResult(testId, currentVehicle, currentFault);

    // Add entry to diagnostic log
    const logEntry = {
      timestamp: diagnosticLog.length + 1,
      testId,
      testLabel: test.label,
      result: result.text,
      clue: result.clue,
      time: test.timeMinutes,
      cost: test.cost,
    };

    setDiagnosticLog([...diagnosticLog, logEntry]);
    setTotalTime(totalTime + test.timeMinutes);
    setTotalCost(totalCost + test.cost);
  };

  // Submit a diagnosis
  const submitDiagnosis = (diagnosis) => {
    setPlayerDiagnosis(diagnosis);
    setGameState('diagnosing');
  };

  // Check diagnosis and calculate score
  const checkDiagnosis = () => {
    const isCorrect = playerDiagnosis.toLowerCase().trim() === currentFault.expectedDiagnosis.toLowerCase().trim();
    const score = calculateScore(isCorrect, diagnosticLog, totalTime, totalCost);

    const result = {
      isCorrect,
      expectedDiagnosis: currentFault.expectedDiagnosis,
      playerDiagnosis: playerDiagnosis,
      score,
      details: {
        testCount: diagnosticLog.length,
        totalTime,
        totalCost,
        efficiency: Math.round((score / 100) * 100),
      },
    };

    setCaseResult(result);
    setGameState('caseComplete');
  };

  // Render based on game state
  if (gameState === 'caseSelection') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Vehicle Diagnostic Game</h1>
          <p>Prototype Version 1.0</p>
        </header>
        <main className="case-selection-screen">
          <div className="case-selection-content">
            <h2>Welcome, Technician</h2>
            <p>
              You are a vehicle diagnostic technician. Each case presents a customer vehicle with a complaint. Your job is to diagnose the fault using logical testing and investigation.
            </p>
            <p>
              Work efficiently: fewer tests and lower cost earn you a better score. But choose the right tests—random testing will not reward you.
            </p>
            <button className="btn-primary" onClick={startNewCase}>
              Start New Case
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (!currentVehicle || !currentFault) {
    return <div>Loading...</div>;
  }

  if (gameState === 'caseComplete') {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Vehicle Diagnostic Game</h1>
        </header>
        <main className="case-complete-screen">
          <CaseResult result={caseResult} onNewCase={startNewCase} />
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Vehicle Diagnostic Game</h1>
        <p>Diagnostic Case in Progress</p>
      </header>
      <main className="game-screen">
        <section className="left-panel">
          <VehicleInfo vehicle={currentVehicle} />
          <CustomerComplaint complaint={currentFault.complaint} />
        </section>
        <section className="middle-panel">
          <DiagnosticLog log={diagnosticLog} />
        </section>
        <section className="right-panel">
          <CaseStats time={totalTime} cost={totalCost} />
          {gameState === 'investigating' && (
            <>
              <TestSelector tests={availableTests} onRunTest={runTest} />
              <DiagnosisSubmission onSubmit={submitDiagnosis} />
            </>
          )}
          {gameState === 'diagnosing' && (
            <div className="diagnosis-review">
              <h3>Your Diagnosis</h3>
              <p className="diagnosis-text">{playerDiagnosis}</p>
              <button className="btn-primary" onClick={checkDiagnosis}>
                Submit Diagnosis
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
