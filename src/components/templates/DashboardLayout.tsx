import { Layout } from "antd";
import Sidebar from "../organisms/Sidebar";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const DashboardLayout = () => {
	return (
		<Layout className="min-h-screen bg-gray-100">
			<Sidebar />
			<Layout className="bg-[#f0f2f5]">
				<Content className="p-8">
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayout;
