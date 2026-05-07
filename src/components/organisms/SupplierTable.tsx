import React from "react";
import { Table, Typography, Spin, Tag } from "antd";
import { useFetchSupplier } from "../../feature/suppliers/hooks/useFetchSupplier";

const { Text } = Typography;

interface SupplierDataType {
	key: string;
	id: number;
	name: string;
	code: string;
	number: string;
	shortName: string;
	address: string;
	contact: string;
	status: string;
}

const columns = [
	{
		title: "Supplier Name",
		key: "name",
		render: (_: any, record: SupplierDataType) => (
			<div>
				<div className="font-medium text-gray-800">{record.name}</div>
				<div className="text-xs text-gray-400">{record.code}</div>
			</div>
		),
	},
	{
		title: "Contact Person",
		dataIndex: "contact",
		key: "contact",
		render: (text: string) => <Text className="text-gray-600">{text}</Text>,
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
		render: (text: string) => <Text className="text-gray-600 truncate max-w-xs">{text}</Text>,
	},
	{
		title: "Status",
		key: "status",
		dataIndex: "status",
		render: (status: string) => {
			let color = "default";
			if (status === "Active") color = "success";
			if (status === "Blocked") color = "error";
			if (status === "In Progress") color = "processing";
			
			return (
				<Tag color={color} className="rounded-full px-3">
					{status}
				</Tag>
			);
		},
	},
];

const SupplierTable: React.FC = () => {
	const { data, isLoading } = useFetchSupplier();

	if (isLoading) {
		return (
			<div className="flex justify-center py-10">
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="bg-white rounded-lg overflow-hidden">
			<Table
				columns={columns}
				dataSource={data}
				pagination={{ pageSize: 5 }}
				className="w-full"
				rowClassName={(_, index) => (index % 2 !== 0 ? "bg-gray-50" : "bg-white")}
			/>
		</div>
	);
};

export default SupplierTable;
