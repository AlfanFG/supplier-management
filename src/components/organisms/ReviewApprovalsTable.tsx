import React from "react";
import { Table, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const { Link } = Typography;

const columns = [
	{
		title: (
			<div className="flex justify-between items-center">
				<span>Process Name</span>
				<div className="flex flex-col text-[10px] leading-[0.5]">
					<CaretUpOutlined />
					<CaretDownOutlined />
				</div>
			</div>
		),
		dataIndex: "processName",
		key: "processName",
		render: (text: string) => <Link className="underline font-medium text-blue-600">{text}</Link>,
	},
	{
		title: "Customer ID",
		dataIndex: "customerId",
		key: "customerId",
		align: "center" as const,
	},
	{
		title: (
			<div className="flex justify-between items-center">
				<span>Customer Name</span>
				<div className="flex flex-col text-[10px] leading-[0.5]">
					<CaretUpOutlined />
					<CaretDownOutlined />
				</div>
			</div>
		),
		dataIndex: "customerName",
		key: "customerName",
	},
	{
		title: (
			<div className="flex justify-between items-center">
				<span>Stage / Flow</span>
				<div className="flex flex-col text-[10px] leading-[0.5]">
					<CaretUpOutlined />
					<CaretDownOutlined />
				</div>
			</div>
		),
		dataIndex: "stageFlow",
		key: "stageFlow",
		align: "center" as const,
	},
	{
		title: (
			<div className="flex justify-between items-center">
				<span>Status</span>
				<div className="flex flex-col text-[10px] leading-[0.5]">
					<CaretUpOutlined />
					<CaretDownOutlined />
				</div>
			</div>
		),
		dataIndex: "status",
		key: "status",
		align: "center" as const,
	},
];

const data = [
	{
		key: "1",
		processName: "Supplier Creation",
		customerId: "1001",
		customerName: "PT Suka Suka",
		stageFlow: "01-02-03-05",
		status: "02: Procurement",
	},
	{
		key: "2",
		processName: "Supplier Assessment",
		customerId: "1001",
		customerName: "PT Suka Suka",
		stageFlow: "06/04/02",
		status: "2 of 3",
	},
	{
		key: "3",
		processName: "Block / Unblock Supplier",
		customerId: "1002",
		customerName: "PT Angin Ribut",
		stageFlow: "01-04-06",
		status: "04: Accounting",
	},
];

const ReviewApprovalsTable: React.FC = () => {
	return (
		<div className="border border-gray-400 rounded overflow-hidden">
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				className="review-approvals-table"
				rowClassName={(_, index) => (index % 2 !== 0 ? "bg-gray-100" : "bg-white")}
			/>
			<style>{`
				.review-approvals-table .ant-table-thead > tr > th {
					background-color: #cccccc !important;
					color: #333333 !important;
					font-weight: 500 !important;
					border-bottom: 1px solid #999999 !important;
					padding: 12px 16px !important;
				}
				.review-approvals-table .ant-table-tbody > tr > td {
					padding: 12px 16px !important;
					border-bottom: none !important;
				}
			`}</style>
		</div>
	);
};

export default ReviewApprovalsTable;
