import React from 'react';
import { Card, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

export interface StatCardProps {
  title: string;
  value: string | number;
  trend?: number; // percentage
  trendLabel?: string;
  icon?: React.ReactNode;
  isNegativeTrend?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  trendLabel,
  icon,
  isNegativeTrend = false,
}) => {
  const isTrendUp = trend && trend > 0;
  const TrendIcon = isTrendUp ? ArrowUpOutlined : ArrowDownOutlined;
  const trendColorClass = isNegativeTrend ? 'text-red-500' : 'text-green-500';

  return (
    <Card className="rounded-xl shadow-sm border-gray-200" bodyStyle={{ padding: '20px' }}>
      <div className="flex justify-between items-start">
        <div>
          <Text className="text-gray-500 text-sm block mb-1">{title}</Text>
          <Title level={3} className="m-0 text-gray-800" style={{ marginTop: 0 }}>
            {value}
          </Title>
          
          {trend !== undefined && (
            <div className={`mt-2 text-xs font-medium ${trendColorClass} flex items-center`}>
              <TrendIcon className="mr-1" />
              <span>{Math.abs(trend)}%</span>
              <span className="text-gray-400 font-normal ml-1">{trendLabel}</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="text-gray-400 text-2xl">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
