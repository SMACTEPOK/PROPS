import React from 'react';
import { EmployeeDirectory } from '../components/employees/EmployeeDirectory';
import { Dashboard } from '../components/ui/Dashboard';
import { ProductCatalog } from '../components/catalog/ProductCatalog';
import { CommentSystem } from '../components/comments/CommentSystem';
import { ProductConfigurator } from '../components/configurator/ProductConfigurator';
import './Lab4Page.css';

export default function Lab4Page() {
  return (
    <div className="lab4-page">
      <header className="lab4-header">
        <h1 className="lab4-title">LAB 04<br/>COMPOSITION</h1>
        <p className="lab4-subtitle">Композиція компонентів та передача props</p>
      </header>

      <main className="lab4-main">
        <EmployeeDirectory />
        <Dashboard />
        <ProductCatalog />
        <ProductConfigurator />
        <CommentSystem />
      </main>
    </div>
  );
}
