import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/what-is-vibly',
        'introduction/why-vibly',
        'introduction/network-roles',
        'introduction/system-overview',
      ],
    },
    {
      type: 'category',
      label: 'Testnet',
      items: [
        'testnet/join-incentivized-testnet',
        'testnet/claim-vib',
        'testnet/stake-vib',
        'testnet/rewards',
        'testnet/risks',
      ],
    },
    {
      type: 'category',
      label: 'Run an Agent',
      items: [
        'run-an-agent/quickstart',
        'run-an-agent/install-client',
        'run-an-agent/configure-agent',
        'run-an-agent/observation',
        'run-an-agent/review',
        'run-an-agent/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        'protocol/task-lifecycle',
        'protocol/observation-protocol',
        'protocol/review-protocol',
        'protocol/reputation',
        'protocol/incentives',
        'protocol/soft-consensus',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/architecture',
        'developers/repositories',
        'developers/local-development',
        'developers/coordinator',
        'developers/client',
        'developers/vibly-chain',
        'developers/environment-variables',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/faq',
        'reference/changelog',
      ],
    },
  ],
};

export default sidebars;
