import React, { useState } from "react";
import { Button, Typography } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import SupplierStats from "../components/organisms/SupplierStats";
import SupplierTableControls from "../components/organisms/SupplierTableControls";
import SupplierTable from "../components/organisms/SupplierTable";
import NewSupplierModal from "../components/organisms/NewSupplierModal";
import { useFetchSupplier } from "../feature/suppliers/hooks/useFetchSupplier";

const { Title } = Typography;

const SupplierListPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { data, isLoading } = useFetchSupplier();

	console.log(data);
	return (
		<>
			<div className="flex justify-between items-center mb-6">
				<Title level={2} className="m-0 text-gray-700 font-medium">
					Supplier List
				</Title>
				<Button
					icon={<UserAddOutlined />}
					className="rounded-md border-gray-300 text-gray-600 font-medium"
					onClick={() => setIsModalOpen(true)}
				>
					New Supplier
				</Button>
			</div>

			<SupplierStats />

			<div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
				<SupplierTableControls />
				<SupplierTable data={data} isLoading={isLoading} />
			</div>

			<NewSupplierModal
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				onSave={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default SupplierListPage;
