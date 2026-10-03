import React from 'react';

const CustomerComplaint = ({ complaint }) => {
  if (!complaint) return null;

  return (
    <div className="complaint-section">
      <h3>Customer Complaint</h3>
      <p>"{complaint}"</p>
    </div>
  );
};

export default CustomerComplaint;
