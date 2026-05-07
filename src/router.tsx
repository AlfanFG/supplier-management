import { createBrowserRouter } from "react-router-dom";

import SupplierListPage from "./pages/SupplierListPage";
import SupplierDetailPage from "./pages/SupplierDetailPage";
import ReviewApprovalsPage from "./pages/ReviewApprovalsPage";
// import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/templates/DashboardLayout";

const route = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "supplier-list",
				element: <SupplierListPage />,
			},
			{
				path: "supplier-detail",
				element: <SupplierDetailPage />,
			},
			{
				path: "review-approvals",
				element: <ReviewApprovalsPage />,
			},

			// { path: "*", element: <NotFound /> },
		],
	},
]);

export default route;
