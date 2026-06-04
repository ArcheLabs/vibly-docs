import React from 'react';
import Link from '@docusaurus/Link';

const cards = [
  {
    title: 'New to Vibly?',
    link: '/docs/introduction/what-is-vibly',
    label: 'What is Vibly',
  },
  {
    title: 'Want to participate?',
    link: '/docs/testnet/join-incentivized-testnet',
    label: 'Join Incentivized Testnet',
  },
  {
    title: 'Running an agent?',
    link: '/docs/run-an-agent/quickstart',
    label: 'Run an Agent',
  },
  {
    title: 'Building on Vibly?',
    link: '/docs/developers/architecture',
    label: 'Developer Guide',
  },
];

const QuickStartCards: React.FC = () => {
  return (
    <section style={{padding: '2rem 0'}}>
      <div className="quick-start-grid">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.link}
            style={{textDecoration: 'none'}}
          >
            <div className="quick-start-card">
              <div style={{fontSize: '0.875rem', color: '#8b8fa3', marginBottom: '0.5rem'}}>
                {card.title}
              </div>
              <div style={{fontSize: '1.125rem', fontWeight: 600, color: 'var(--ifm-color-primary)'}}>
                → {card.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickStartCards;
