import React, { useState } from "react";
import { Modal, Input, Tabs, Table, Radio, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import ImageUpload from "../molecules/ImageUpload";

interface NewSupplierModalProps {
	open: boolean;
	onCancel: () => void;
	onSave: () => void;
}

interface ContactType {
	key: React.Key;
	id: number;
	name: string;
	jobPosition: string;
	email: string;
	phone: string;
	mobile: string;
}

const contactsData: ContactType[] = [
	{
		key: "1",
		id: 1,
		name: "Albert",
		jobPosition: "CEO",
		email: "einstein@gmail.com",
		phone: "021.123456",
		mobile: "0811234567",
	},
	{
		key: "2",
		id: 2,
		name: "Isaac",
		jobPosition: "Mgr Proc",
		email: "newton@gmail.com",
		phone: "021.654321",
		mobile: "0811765432",
	},
];

const NewSupplierModal: React.FC<NewSupplierModalProps> = ({
	open,
	onCancel,
	onSave,
}) => {
	const [mainContactKey, setMainContactKey] = useState<React.Key>("1");

	const contactColumns: ColumnsType<ContactType> = [
		{
			title: (
				<PlusCircleFilled className="text-blue-500 text-lg cursor-pointer" />
			),
			dataIndex: "id",
			key: "id",
			width: 50,
			align: "center",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Job Position",
			dataIndex: "jobPosition",
			key: "jobPosition",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "phone",
		},
		{
			title: "Mobile",
			dataIndex: "mobile",
			key: "mobile",
		},
		{
			title: "Main",
			key: "main",
			align: "center",
			render: (_, record) => (
				<Radio
					checked={mainContactKey === record.key}
					onChange={() => setMainContactKey(record.key)}
				/>
			),
		},
	];

	return (
		<Modal
			title="New Supplier"
			open={open}
			onCancel={onCancel}
			width={700}
			footer={[
				<Button key="cancel" onClick={onCancel} className="px-6">
					Cancel
				</Button>,
				<Button
					key="save"
					type="primary"
					onClick={onSave}
					className="px-6 bg-blue-500"
				>
					Save
				</Button>,
			]}
			className="new-supplier-modal"
		>
			<div className="py-4">
				{/* Top Section: Logo & Inputs */}
				<div className="flex gap-6 mb-6">
					{/* Logo Placeholder */}
					{/* <div className="relative w-32 h-32 border border-gray-400 flex items-center justify-center bg-white overflow-hidden shrink-0">
            <svg
              className="absolute inset-0 w-full h-full text-gray-400"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 100 100"
            >
              <path d="M0,0 L100,100 M100,0 L0,100" strokeWidth="1" />
            </svg>
            <div className="z-10 bg-white px-2 py-1 text-sm font-medium border border-gray-300 rounded">
              Logo
            </div>
          </div> */}
					<ImageUpload />

					{/* Form Fields */}
					<div className="flex-1 flex flex-col justify-center gap-4">
						<div>
							<label className="block text-gray-600 mb-1 text-sm">
								Supplier Name
							</label>
							<Input
								defaultValue="PT Setroom Indonesia"
								className="w-full rounded-none border-gray-400 py-1"
							/>
						</div>
						<div>
							<label className="block text-gray-600 mb-1 text-sm">
								Nick Name
							</label>
							<Input
								defaultValue="Setroom"
								className="w-64 rounded-none border-gray-400 py-1"
							/>
						</div>
					</div>
				</div>

				{/* Tabs Section */}
				<Tabs
					defaultActiveKey="contacts"
					type="card"
					items={[
						{
							key: "address",
							label: "Address",
							children: (
								<div className="p-4 border border-t-0 border-gray-300 min-h-[200px]">
									Address info goes here
								</div>
							),
						},
						{
							key: "contacts",
							label: "Contacts",
							children: (
								<div className="p-4 border border-t-0 border-gray-300">
									<Table
										columns={contactColumns}
										dataSource={contactsData}
										pagination={false}
										size="small"
										bordered
										className="border-gray-300"
									/>
								</div>
							),
						},
						{
							key: "groups",
							label: "Groups",
							children: (
								<div className="p-4 border border-t-0 border-gray-300 min-h-[200px]">
									Groups info goes here
								</div>
							),
						},
						{
							key: "material-list",
							label: "Material List",
							children: (
								<div className="p-4 border border-t-0 border-gray-300 min-h-[200px]">
									Material List info goes here
								</div>
							),
						},
						{
							key: "others",
							label: "Others",
							children: (
								<div className="p-4 border border-t-0 border-gray-300 min-h-[200px]">
									Others info goes here
								</div>
							),
						},
					]}
				/>
			</div>
		</Modal>
	);
};

export default NewSupplierModal;
