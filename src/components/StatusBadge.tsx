import React from 'react';

type BadgeVariant = 'mvp' | 'testnet' | 'draft' | 'experimental' | 'stable';

const StatusBadge: React.FC<{variant: BadgeVariant}> = ({variant}) => {
  return <span className={`status-badge status-badge--${variant}`}>{variant}</span>;
};

export default StatusBadge;
