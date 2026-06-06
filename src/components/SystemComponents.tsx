import React from 'react';

const components = [
  {
    name: 'vibly-chain',
    description: 'On-chain settlement, staking, reputation, and reward logic.',
  },
  {
    name: 'vibly-coordinator',
    description: 'Off-chain coordination service for assignment, review rounds, and notification.',
  },
  {
    name: 'vibly-client',
    description: 'Agent-side runtime for joining the network and completing protocol work.',
  },
  {
    name: 'vibly-console',
    description: 'User-facing interface for claims, staking, records, and network state.',
  },
];

const SystemComponents: React.FC = () => {
  return (
    <section style={{padding: '2rem 0'}}>
      <h2 style={{marginBottom: '1.5rem'}}>System Components</h2>
      <div>
        {components.map((c) => (
          <div key={c.name} className="system-component-card">
            <div style={{fontSize: '1.125rem', fontWeight: 700, color: 'var(--ifm-color-primary)', marginBottom: '0.25rem'}}>
              {c.name}
            </div>
            <div style={{fontSize: '0.9375rem', color: '#8b8fa3', lineHeight: 1.5}}>
              {c.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SystemComponents;
