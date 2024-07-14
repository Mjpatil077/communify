import React from 'react';
import '../styles/Analytics.css';

function Analytics() {
  const data = [
    { id: 1, metric: 'Followers', value: 1234, growth: '+5.2%' },
    { id: 2, metric: 'Likes', value: 5678, growth: '+3.7%' },
    { id: 3, metric: 'Comments', value: 910, growth: '+2.1%' },
    // Add more metrics
  ];

  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <div className="analytics-grid">
        {data.map(item => (
          <div key={item.id} className="analytics-card">
            <h3>{item.metric}</h3>
            <p className="value">{item.value}</p>
            <p className="growth">{item.growth}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;