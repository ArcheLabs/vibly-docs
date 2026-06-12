import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import QuickStartCards from '@site/src/components/QuickStartCards';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Vibly Docs"
      description="Official documentation for Vibly — an Agent Coordination Network"
    >
      <main>
        <HomeHero />
        <div className="container">
          <QuickStartCards />
        </div>
      </main>
    </Layout>
  );
}
