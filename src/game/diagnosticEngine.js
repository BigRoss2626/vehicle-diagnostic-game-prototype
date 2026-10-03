import { testCatalog } from '../data/testCatalog';
import { faults } from '../data/faults';

/**
 * Get the diagnostic result for a specific test on a vehicle with a fault.
 * This function returns realistic results based on the fault's diagnostic clues.
 */
export const getDiagnosticResult = (testId, vehicle, fault) => {
  // If the fault has clues for this test, return them
  if (fault.diagnosticClues && fault.diagnosticClues[testId]) {
    return fault.diagnosticClues[testId];
  }

  // Fallback result if no specific clue exists
  return {
    text: 'Test completed. No obvious issues found with this parameter.',
    clue: 'This test did not reveal anything unusual.',
  };
};

/**
 * Calculate a diagnostic score based on:
 * - Correct diagnosis
 * - Number of tests performed
 * - Total time spent
 * - Total cost spent
 * - Efficiency of test selection
 */
export const calculateScore = (isCorrect, diagnosticLog, totalTime, totalCost) => {
  let score = 0;

  // Base score for correctness
  if (!isCorrect) {
    return 0; // No points for incorrect diagnosis
  }

  score = 100;

  // Deduct points based on number of tests (efficiency penalty)
  // Optimal: 4-6 tests. Each test above 6 costs 5 points, each test below 4 costs 2 points (for missing obvious clues)
  const optimalTestCount = 5;
  const testCount = diagnosticLog.length;

  if (testCount > optimalTestCount) {
    score -= (testCount - optimalTestCount) * 5;
  }

  // Deduct points based on total time (max deduction: 20 points)
  // Optimal: 30-45 minutes. Going over costs more points.
  if (totalTime > 45) {
    score -= Math.min((totalTime - 45) * 0.5, 20);
  }

  // Deduct points based on total cost (max deduction: 15 points)
  // Higher cost is penalized but necessary tests are rewarded
  if (totalCost > 200) {
    score -= Math.min((totalCost - 200) * 0.05, 15);
  }

  // Ensure score never goes below 0
  return Math.max(score, 0);
};

/**
 * Get text feedback based on score
 */
export const getScoreFeedback = (score) => {
  if (score >= 90) {
    return 'Excellent work! You diagnosed the fault efficiently and logically.';
  } else if (score >= 75) {
    return 'Good diagnosis. You could have been more efficient with your test selection.';
  } else if (score >= 60) {
    return 'Correct diagnosis, but you performed too many tests or took too long.';
  } else if (score > 0) {
    return 'Correct diagnosis, but your diagnostic method was inefficient.';
  } else {
    return 'Incorrect diagnosis. Review the test results and try again on the next case.';
  }
};
