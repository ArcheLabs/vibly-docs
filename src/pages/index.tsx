import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import QuickStartCards from '@site/src/components/QuickStartCards';
import ProtocolFlow from '@site/src/components/ProtocolFlow';
import SystemComponents from '@site/src/components/SystemComponents';

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
          <ProtocolFlow />
          <SystemComponents />
        </div>
      </main>
    </Layout>
  );
}
