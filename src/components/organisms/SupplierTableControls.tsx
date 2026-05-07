import React from 'react';
import { Input, Select, Button, Space } from 'antd';
import { 
  SearchOutlined, 
  ExportOutlined,
  AppstoreOutlined,
  MenuOutlined
} from '@ant-design/icons';

const SupplierTableControls: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Space size="middle">
        <Input 
          placeholder="Search Customer" 
          prefix={<SearchOutlined className="text-gray-400" />} 
          className="w-64 rounded-full"
        />
        <Select defaultValue="active" className="w-32" options={[
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'all', label: 'All' },
        ]} />
      </Space>

      <Space size="middle">
        <Button icon={<ExportOutlined />} className="flex items-center">
          Export
        </Button>
        <Space size="small" className="text-gray-400 text-lg cursor-pointer">
          <AppstoreOutlined className="hover:text-gray-800 transition-colors" />
          <MenuOutlined className="text-blue-500 hover:text-blue-600 transition-colors" />
        </Space>
      </Space>
    </div>
  );
};

export default SupplierTableControls;
