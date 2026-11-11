import React, { useState } from 'react';
import { EmployeeCard } from './EmployeeCard';
import { mockEmployees } from '../../data/mockEmployees';

export function EmployeeDirectory() {
  const [interactions, setInteractions] = useState(0);

  const handleAction = (type, payload) => {
    setInteractions((prev) => prev + 1);
    alert(`[${type}] Дія з: ${payload}`);
  };

  return (
    <div className="section">
      <div className="section__header">
        <h2 className="section__title">01 / Довідник співробітників</h2>
        <div className="counter-box">Взаємодій: <strong>{interactions}</strong></div>
      </div>
      <div className="employees-grid">
        {mockEmployees.map(emp => (
          <EmployeeCard 
            key={emp.id} 
            employee={emp} 
            onEmailClick={(email) => handleAction('Email', email)}
            onPhoneClick={(phone) => handleAction('Дзвінок', phone)}
            onViewProfile={(id) => handleAction('Профіль', `ID ${id}`)}
          />
        ))}
      </div>
    </div>
  );
}
