import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const OutstandingsTable: React.FC = () => {
	const columns = [
		{ title: "#", dataIndex: "key", key: "key", width: 40 },
		{ title: "Invoice Number", dataIndex: "invoiceNumber", key: "invoiceNumber" },
		{ title: "Project Name", dataIndex: "projectName", key: "projectName" },
		{ title: "Amount", dataIndex: "amount", key: "amount", align: "right" as const },
		{ title: "Aging (days)", dataIndex: "aging", key: "aging", align: "center" as const },
	];

	const dataSource = [
		{
			key: "1",
			invoiceNumber: "INV1234",
			projectName: "Project ABC",
			amount: "123.000",
			aging: "34",
		},
		{ key: "2", invoiceNumber: "", projectName: "", amount: "", aging: "" },
		{ key: "3", invoiceNumber: "", projectName: "", amount: "", aging: "" },
		{ key: "4", invoiceNumber: "", projectName: "", amount: "", aging: "" },
	];

	return (
		<div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
			<Title level={5} className="mb-4 font-bold">
				Outstandings
			</Title>
			<Table
				dataSource={dataSource}
				columns={columns}
				pagination={false}
				bordered
				size="small"
				className="outstanding-table"
			/>
			<style>{`
				.outstanding-table .ant-table-thead > tr > th {
					background-color: #d1d5db !important;
					color: #374151 !important;
					font-weight: bold !important;
					border-bottom: 1px solid #9ca3af !important;
				}
				.outstanding-table .ant-table-tbody > tr > td {
					height: 32px;
				}
			`}</style>
		</div>
	);
};

export default OutstandingsTable;
