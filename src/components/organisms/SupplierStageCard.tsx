import React from "react";
import { Button, Input, Steps, Typography } from "antd";

const { Title, Text } = Typography;

const SupplierStageCard: React.FC = () => {
	const items = [
		{ title: "Draft", status: "process" as const },
		{ title: "In Review", status: "wait" as const },
		{ title: "In Assessment", status: "wait" as const },
		{ title: "Active", status: "wait" as const },
	];

	return (
		<div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
			<div className="flex justify-between items-center mb-6">
				<Title level={5} className="m-0 font-bold">
					Stage: Supplier Creation
				</Title>
				<Text className="text-gray-400 text-xs">SLA: 72 hour(s)</Text>
			</div>

			<div className="mb-8 px-2">
				<Steps
					size="small"
					current={0}
					labelPlacement="vertical"
					items={items}
					className="supplier-steps"
				/>
				<div className="flex flex-col items-center mt-2">
					<Text className="text-[10px] text-gray-400">Elapsed</Text>
					<Text className="text-[10px] text-gray-400 font-bold">05:00:10</Text>
				</div>
			</div>

			<div className="mb-4">
				<div className="border-t border-gray-300 pt-2 pb-1">
					<Text className="font-medium text-gray-700">Notes</Text>
				</div>
				<Input.TextArea rows={1} className="rounded-none border-gray-300" />
			</div>

			<div className="flex justify-end">
				<Button className="bg-gray-100 border-gray-400 hover:bg-gray-200 font-bold h-10 px-6">
					Next Stage
				</Button>
			</div>

			<style>{`
				.supplier-steps .ant-steps-item-title {
					font-size: 10px !important;
					color: #9ca3af !important;
				}
				.supplier-steps .ant-steps-item-process .ant-steps-item-title {
					color: #3b82f6 !important;
					font-weight: bold;
				}
				.supplier-steps .ant-steps-item-icon {
					width: 20px !important;
					height: 20px !important;
					line-height: 18px !important;
				}
				.supplier-steps .ant-steps-item-tail::after {
					background-color: #d1d5db !important;
				}
			`}</style>
		</div>
	);
};

export default SupplierStageCard;
