import React from 'react';
import { TeamOutlined, UserAddOutlined, DollarOutlined, StopOutlined } from '@ant-design/icons';
import StatCard from '../molecules/StatCard';

const SupplierStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Supplier"
        value="1,869"
        trend={8}
        trendLabel="vs last year"
        icon={<TeamOutlined />}
      />
      <StatCard
        title="New Supplier"
        value="27"
        trend={1}
        trendLabel="vs Last Year"
        icon={<UserAddOutlined />}
      />
      <StatCard
        title="Avg Cost per Supplier"
        value="Rp 320,3 Mn"
        trend={-1}
        trendLabel="vs Last Year"
        icon={<DollarOutlined />}
        isNegativeTrend={true}
      />
      <StatCard
        title="Blocked Supplier"
        value="31"
        trend={-4}
        trendLabel="vs Last Year"
        icon={<StopOutlined />}
      />
    </div>
  );
};

export default SupplierStats;
