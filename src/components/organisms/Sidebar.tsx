import React, { useState } from "react";
import { Layout, Menu, Divider, Typography, Button } from "antd";
import {
	AppstoreOutlined,
	TeamOutlined,
	ExportOutlined,
	QuestionCircleOutlined,
	UserOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";
import { cn } from "../../libs/utils";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar: React.FC = () => {
	const navigateTo = useNavigate();
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};
	return (
		<Sider
			collapsed={collapsed}
			width={260}
			theme="light"
			className="border-r border-gray-200"
		>
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{ marginTop: 16, marginLeft: "80%", position: "sticky" }}
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<div
				className={cn(
					collapsed
						? "flex-col gap-2 items-center justify-items-center"
						: "flex items-center px-6 py-5",
				)}
			>
				{/* Mock Logo */}
				<div
					className={cn(
						"w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold",
					)}
				>
					<span className="transform -rotate-45 block text-xs">/</span>
				</div>
				{!collapsed && (
					<span className="text-xl font-bold tracking-wide">ALISA</span>
				)}
			</div>

			<Menu
				mode="inline"
				defaultSelectedKeys={["supplier-list"]}
				defaultOpenKeys={["supplier-management"]}
				inlineCollapsed={collapsed}
				className="border-r-0"
				items={[
					{
						key: "dashboard",
						icon: <AppstoreOutlined />,
						label: "Dashboard",
					},
					{
						key: "supplier-management",
						icon: <TeamOutlined />,
						label: "Supplier Management",
						children: [
							{ key: "supp-dashboard", label: "Dashboard" },
							{
								key: "supplier-list",
								label: "Supplier List",
								onClick: () => navigateTo("supplier-list"),
							},
							{
								key: "review-approvals",
								label: "Review & Approvals",
								onClick: () => navigateTo("review-approvals"),
							},
							{ key: "configurations", label: "Configurations" },
						],
					},
					{
						key: "funnel-management",
						icon: <ExportOutlined className="transform -rotate-45" />,
						label: "Funnel Management",
					},
				]}
			/>

			<div className="absolute bottom-0 w-full">
				<Divider className="my-0" />
				<Menu
					mode="inline"
					className="border-r-0 pb-4"
					selectable={false}
					items={[
						{
							key: "help-support",
							icon: <QuestionCircleOutlined />,
							label: "Help & Support",
						},
						{
							key: "user-profile",
							icon: <UserOutlined className="text-red-500" />,
							label: <Text className="text-red-500">John Doe</Text>,
						},
					]}
				/>
			</div>
		</Sider>
	);
};

export default Sidebar;
