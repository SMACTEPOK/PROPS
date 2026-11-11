import React from 'react';
import PropTypes from 'prop-types';

export function EmployeeCard({ employee, onEmailClick, onPhoneClick, onViewProfile }) {
  return (
    <div className="employee-card">
      <div className="employee-card__avatar-wrapper">
        <img src={employee.avatar} alt={employee.name} className="employee-card__avatar" />
        {employee.isOnline && <span className="employee-card__status" title="Онлайн" />}
      </div>
      <div className="employee-card__info">
        <h3 className="employee-card__name">{employee.name}</h3>
        <p className="employee-card__position">{employee.position}</p>
        <p className="employee-card__department">{employee.department}</p>
        
        {employee.isManager && <span className="employee-card__badge">Керівник</span>}
        
        <div className="employee-card__actions">
          <button onClick={() => onEmailClick(employee.email)} className="btn btn--small">Email</button>
          <button onClick={() => onPhoneClick(employee.phone)} className="btn btn--small">Дзвінок</button>
          <button onClick={() => onViewProfile(employee.id)} className="btn btn--small">Профіль</button>
        </div>
      </div>
    </div>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    isManager: PropTypes.bool,
  }).isRequired,
  onEmailClick: PropTypes.func.isRequired,
  onPhoneClick: PropTypes.func.isRequired,
  onViewProfile: PropTypes.func.isRequired,
};
