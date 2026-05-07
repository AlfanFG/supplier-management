import React from "react";
import { Input, Typography } from "antd";
import { SearchOutlined, AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import ApprovalStatCard from "../components/molecules/ApprovalStatCard";
import ReviewApprovalsTable from "../components/organisms/ReviewApprovalsTable";

const { Title } = Typography;

const ReviewApprovalsPage: React.FC = () => {
	return (
		<div className="flex flex-col gap-6">
			<Title level={3} className="m-0 font-bold text-gray-700">
				Review & Approvals
			</Title>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<ApprovalStatCard title="Supplier Creation" count={1} />
				<ApprovalStatCard title="Supplier Assessment" count={1} />
				<ApprovalStatCard title="Block / Unblock Supplier" count={1} />
			</div>

			<div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
				<div className="flex justify-between items-center mb-6">
					<Input
						placeholder="Search Supplier"
						prefix={<SearchOutlined className="text-gray-400" />}
						className="max-w-md rounded-full h-10 border-gray-400"
					/>
					<div className="flex items-center gap-3 text-xl text-gray-400">
						<AppstoreOutlined className="cursor-pointer hover:text-blue-500" />
						<div className="w-px h-6 bg-blue-500 mx-1"></div>
						<MenuOutlined className="text-blue-500 cursor-pointer" />
					</div>
				</div>

				<ReviewApprovalsTable />
			</div>
		</div>
	);
};

export default ReviewApprovalsPage;
