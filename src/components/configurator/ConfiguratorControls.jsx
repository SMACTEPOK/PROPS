import React from 'react';

export function ConfiguratorGroup({ title, children }) {
  return (
    <div className="config-group">
      <h4 className="config-group__title">{title}</h4>
      <div className="config-group__content">{children}</div>
    </div>
  );
}

export function ConfiguratorRadio({ label, name, value, checked, onChange, extra }) {
  return (
    <label className={`config-radio ${checked ? 'config-radio--active' : ''}`}>
      <input 
        type="radio" 
        name={name} 
        value={value} 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="config-radio__box"></span>
      <span className="config-radio__label">{label}</span>
      {extra && <span className="config-radio__extra">{extra}</span>}
    </label>
  );
}

export function ConfiguratorCheckbox({ label, checked, onChange, extra }) {
  return (
    <label className={`config-checkbox ${checked ? 'config-checkbox--active' : ''}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="config-checkbox__box"></span>
      <span className="config-checkbox__label">{label}</span>
      {extra && <span className="config-checkbox__extra">{extra}</span>}
    </label>
  );
}
