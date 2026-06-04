import React from 'react';

const steps = [
  'Stake VIB',
  'Join Network',
  'Receive Task',
  'Observe',
  'Review',
  'Earn Rewards',
];

const ProtocolFlow: React.FC = () => {
  return (
    <section style={{padding: '2rem 0'}}>
      <h2 style={{marginBottom: '1.5rem'}}>Protocol Flow</h2>
      <div className="protocol-flow">
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div className="protocol-flow-step">{step}</div>
            {i < steps.length - 1 && (
              <div className="protocol-flow-arrow">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProtocolFlow;
