import React from 'react';

const VehicleInfo = ({ vehicle }) => {
  if (!vehicle) return null;

  return (
    <div className="vehicle-info card">
      <h2>
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h2>
      <div className="vehicle-info-detail">Engine: {vehicle.engine}</div>
      <div className="vehicle-info-detail">Type: {vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</div>
      <div className="vehicle-info-detail">Mileage: {vehicle.mileage}</div>
      <div className="vehicle-info-detail" style={{ marginTop: '0.75rem', fontSize: '0.8rem' }}>
        <strong>Service History:</strong> {vehicle.serviceHistory}
      </div>
    </div>
  );
};

export default VehicleInfo;
