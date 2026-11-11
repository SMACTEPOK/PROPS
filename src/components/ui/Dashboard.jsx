import React from 'react';
import { Card } from './Card';

export function Dashboard() {
  return (
    <div className="section">
      <h2 className="section__title">03 / Панель (Композиція)</h2>
      <div className="dashboard-grid">
        <Card variant="primary" size="medium">
          <Card.Header>Статистика</Card.Header>
          <Card.Body>
            <h3 style={{ margin: 0, fontSize: '2rem' }}>1,248</h3>
            <p style={{ margin: '10px 0 0', color: 'var(--color-muted)' }}>Активних користувачів</p>
          </Card.Body>
          <Card.Footer>Оновлено 5 хв тому</Card.Footer>
        </Card>

        <Card variant="success" size="medium" shadow={false}>
          <Card.Header>Система</Card.Header>
          <Card.Body>
            <p style={{ margin: 0 }}>Всі сервіси працюють у штатному режимі.</p>
          </Card.Body>
        </Card>

        <Card variant="warning" size="medium" border={false}>
          <Card.Header>Увага</Card.Header>
          <Card.Body>
            <p style={{ margin: 0 }}>Використано 85% дискового простору.</p>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn--small">Очистити</button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
