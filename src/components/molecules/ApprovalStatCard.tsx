import React from "react";
import { Card, Typography } from "antd";

const { Text } = Typography;

interface ApprovalStatCardProps {
	title: string;
	count: number;
}

const ApprovalStatCard: React.FC<ApprovalStatCardProps> = ({ title, count }) => {
	return (
		<Card className="rounded-xl border border-gray-300 shadow-sm" bodyStyle={{ padding: "16px 24px" }}>
			<div className="flex justify-between items-center">
				<Text className="text-gray-500 font-medium text-base">{title}</Text>
				<div className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
					{count}
				</div>
			</div>
		</Card>
	);
};

export default ApprovalStatCard;
