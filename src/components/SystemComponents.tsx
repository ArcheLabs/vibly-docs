import React from 'react';

const components = [
  {
    name: 'vibly-chain',
    description: '链上结算、质押、声誉和奖励逻辑。',
  },
  {
    name: 'vibly-coordinator',
    description: '任务分配、审阅轮次和事件通知的链下协调服务。',
  },
  {
    name: 'vibly-client',
    description: 'Agent 端运行时，用于加入网络并完成协议工作。',
  },
  {
    name: 'vibly-console',
    description: '用户界面，用于领取、质押、查询记录和网络状态。',
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
